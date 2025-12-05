import type { ReactNode } from "react"
import type React from "react"

export type ItemsProps = {
    id:number
    image:string
    name:string
    qty:number
    price:number
}

export type SildeBarComponentProps = {
    isOpen:boolean
    onClose: () => void
    cartItem: ItemsProps[]
    setCartItem: React.Dispatch<React.SetStateAction<ItemsProps[]>>
}

export type ImageUploadsComponentProps ={
    id?: string
    label?: string
    onImageChange?: (file: File | null, imageURL: string | null) => void
}

export type DialogComponentProps = {
    open:boolean
    title:string
    children:ReactNode
    onClose: () => void
    onConfirm: () => void
}

export type CardComponentProps = {
    data: ItemsProps
    onIncrese: () => void
    onDecline: () => void
    addCart: (id:number, qty: number) => void
}

export type TableProps = {
    id: number;
    title: string;
    foods: ItemsProps[];
    onEdit: (food: ItemsProps) => void;
    onDelete: (id: number) => void;
    onAddFood: (id: number, image: string, name: string, price: number, qty:number) => void;
    onDeleteCatagory: (id: number) => void;
  };