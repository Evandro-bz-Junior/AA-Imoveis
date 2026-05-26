"use client"

import Image from "next/image"

interface UploadImagesProps {
    files: File[]
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

export default function UploadImages({
    files,
    setFiles
}: UploadImagesProps) {

    function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFiles = e.target.files

        if (!selectedFiles) return

        const newFiles = Array.from(selectedFiles)

        setFiles((prev) => [...prev, ...newFiles])
    }

    function removeImage(index: number) {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="flex flex-col gap-4">

            <label
                htmlFor="images"
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-primary transition-colors"
            >
                <span className="text-text2">
                    Clique para adicionar imagens
                </span>

                <input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFiles}
                    className="hidden"
                />
            </label>

            {files.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden border bg-white shadow-sm"
                        >
                            <div className="relative w-full h-40">
                                <Image
                                    src={
                                        typeof file === "string"
                                            ? file
                                            : URL.createObjectURL(file)
                                    } alt={
                                        typeof file === "string"
                                            ? "Imagem do imóvel"
                                            : file.name
                                    }
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full text-sm hover:bg-red-600 transition-colors"
                            >
                                ✕
                            </button>

                            <div className="p-2">
                                <p className="text-xs truncate text-text2">
                                    {
                                        typeof file === "string"
                                            ? "Imagem salva"
                                            : file.name
                                    }
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}