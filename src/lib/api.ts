import { properties } from "@/data/properties"

export async function getProperties() {
    return properties
}

export async function getPropertyById(id: number | string) {
    return properties.find((p) => p.id === id)
}