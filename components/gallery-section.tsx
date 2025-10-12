"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/modern-swimming-pool-interior.jpg",
    alt: "Современный бассейн",
    category: "pool",
  },
  {
    id: 2,
    src: "/modern-gym-equipment.png",
    alt: "Тренажерный зал",
    category: "gym",
  },
  {
    id: 3,
    src: "/group-fitness-class.png",
    alt: "Групповые занятия",
    category: "classes",
  },
  {
    id: 4,
    src: "/kids-swimming-pool.jpg",
    alt: "Детский бассейн",
    category: "pool",
  },
  {
    id: 5,
    src: "/martial-arts-training.jpg",
    alt: "Единоборства",
    category: "classes",
  },
  {
    id: 6,
    src: "/modern-swimming-pool-with-clear-blue-water-and-fit.jpg",
    alt: "Основной бассейн",
    category: "pool",
  },
]

const categories = [
  { id: "all", name: "Все фото" },
  { id: "pool", name: "Бассейн" },
  { id: "gym", name: "Тренажерный зал" },
  { id: "classes", name: "Групповые занятия" },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openImage = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Галерея</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Посмотрите на наши современные залы, бассейн и зоны отдыха
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openImage(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-navy" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/95">
            {selectedImageData && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={closeImage}
                >
                  <X className="w-6 h-6" />
                </Button>

                <div className="relative aspect-[16/10]">
                  <Image
                    src={selectedImageData.src || "/placeholder.svg"}
                    alt={selectedImageData.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                  <h3 className="font-medium">{selectedImageData.alt}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
