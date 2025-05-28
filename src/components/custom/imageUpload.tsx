"use client"

import type React from "react"

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next"
import { useRef, useState, useCallback, useEffect, ChangeEvent } from "react"
import { Upload, FileImage, CheckCircle, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ImageUploadProps {
  value?: string // Current form field value
  onChange?: (value: string) => void // Form field onChange
  onUploadComplete?: (url: string) => void
  onUploadError?: (error: string) => void
  className?: string
}

export default function ImageUpload({ value, onChange, onUploadComplete, onUploadError, className }: ImageUploadProps) {
  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const fileInputRef = useRef<HTMLInputElement>(null)
  const abortController = useRef(new AbortController())


  const authenticator = async () => {
    try {
      const response = await fetch("/api/upload-auth")
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Request failed with status ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      const { signature, expire, token, publicKey } = data
      return { signature, expire, token, publicKey }
    } catch (error) {
      console.error("Authentication error:", error)
      throw new Error("Authentication request failed")
    }
  }

  const validateFile = (file: File): string | null => {
    const maxSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a valid image file (JPEG, PNG, or WebP)"
    }

    if (file.size > maxSize) {
      return "File size must be less than 10MB"
    }

    return null
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file to upload")
      setUploadStatus("error")
      return
    }

    setIsUploading(true)
    setUploadStatus("uploading")
    setProgress(0)
    setErrorMessage("")

    // Create new abort controller for this upload
    abortController.current = new AbortController()

    try {
      const authParams = await authenticator()
      const { signature, expire, token, publicKey } = authParams

      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file: selectedFile,
        fileName: selectedFile.name,
        onProgress: (event) => {
          const progressPercent = (event.loaded / event.total) * 100
          setProgress(progressPercent)
        },
        abortSignal: abortController.current.signal,
      })

      setUploadStatus("success")
      // Update form field with the actual uploaded URL
      onChange?.(uploadResponse.url!)
      // Update preview to show uploaded image
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl)
      }
      // setPreviewUrl(uploadResponse.url)
      onUploadComplete?.(uploadResponse.url!)
      console.log("Upload successful:", uploadResponse)
    } catch (error) {
      setUploadStatus("error")
      let errorMsg = "Upload failed. Please try again."

      if (error instanceof ImageKitAbortError) {
        errorMsg = "Upload was cancelled"
      } else if (error instanceof ImageKitInvalidRequestError) {
        errorMsg = "Invalid file or request. Please check your file and try again."
      } else if (error instanceof ImageKitUploadNetworkError) {
        errorMsg = "Network error. Please check your connection and try again."
      } else if (error instanceof ImageKitServerError) {
        errorMsg = "Server error. Please try again later."
      }

      setErrorMessage(errorMsg)
      onUploadError?.(errorMsg)
      console.error("Upload error:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileSelect = useCallback(
    (file: File) => {
      const validationError = validateFile(file)
      if (validationError) {
        setErrorMessage(validationError)
        setUploadStatus("error")
        return
      }

      // Clean up previous preview URL
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl)
      }

      setSelectedFile(file)
      setErrorMessage("")
      setUploadStatus("idle")

      // Create preview URL for the selected image
      const newPreviewUrl = URL.createObjectURL(file)
      setPreviewUrl(newPreviewUrl)

      // Immediately update the form field to indicate file is selected
      // This prevents validation errors when other fields are filled
      onChange?.(`file-selected:${file.name}`)
    },
    [onChange, previewUrl],
  )

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleRemoveFile = () => {
    // Clean up preview URL
    if (previewUrl && previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl)
    }

    setSelectedFile(null)
    setPreviewUrl(null)
    setProgress(0)
    setUploadStatus("idle")
    setErrorMessage("")
    // Clear the form field value
    onChange?.("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSelectFile = () => {
    fileInputRef.current?.click()
  }

  // Check if we have a file selected or uploaded
  const hasFile = selectedFile || (value && (value.startsWith("http") || value.startsWith("file-selected:")))

  return (
    <div className={cn("w-full", className)}>
      {!hasFile ? (
        <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="p-4 bg-gray-800 rounded-full">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Upload your university ID card</p>
              <p className="text-xs text-gray-400 mt-1">Select an image file to upload</p>
            </div>
            <p className="text-xs text-gray-500">Supports: JPEG, PNG, WebP (max 10MB)</p>
            <Button
              variant="outline"
              onClick={handleSelectFile}
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Select File
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Image Preview */}
          {previewUrl && (
            <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-4">
              <div className="flex justify-center">
                <div className="relative max-w-xs w-full">
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border border-gray-600"
                    onError={() => {
                      console.error("Failed to load image preview")
                      setPreviewUrl(null)
                    }}
                  />
                  {uploadStatus === "uploading" && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-xs text-white">Uploading...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* File Information */}
          <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileImage className="w-6 h-6 text-gray-400" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{selectedFile?.name || "University ID Card"}</p>

                {selectedFile && (
                  <p className="text-xs text-gray-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                )}

                {uploadStatus === "uploading" && (
                  <div className="mt-2 space-y-1">
                    <Progress value={progress} className="h-1" />
                    <p className="text-xs text-gray-400">Uploading... {Math.round(progress)}%</p>
                  </div>
                )}

                {uploadStatus === "success" && (
                  <div className="flex items-center space-x-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <p className="text-xs text-green-500">Upload successful</p>
                  </div>
                )}

                {uploadStatus === "idle" && selectedFile && (
                  <div className="flex items-center space-x-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                    <p className="text-xs text-blue-500">File selected - ready to upload</p>
                  </div>
                )}

                {uploadStatus === "error" && errorMessage && (
                  <div className="flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <p className="text-xs text-red-500">{errorMessage}</p>
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
                disabled={isUploading}
                className="text-gray-400 hover:text-white flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          {uploadStatus === "idle" && (
            <Button onClick={handleUpload} disabled={isUploading} className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          )}

          {uploadStatus === "error" && (
            <Button
              variant="outline"
              onClick={handleSelectFile}
              className="w-full border-gray-600 text-gray-300 hover:text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Select Different File
            </Button>
          )}
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" />
    </div>
  )
}
