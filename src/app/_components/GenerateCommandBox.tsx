"use client"

import { useKeyboard } from "@/hooks/useKeyboard"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { GenerateUrlSchema, generateUrlSchema } from "../_schema"
import { toast } from "sonner"
import { generateUrl } from "../_actions"
import { useState } from "react"

type GenerateCommandBoxProps = {
  closeModal: () => void
}

export function GenerateCommandBox ({ closeModal }: GenerateCommandBoxProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<GenerateUrlSchema>({
    resolver: zodResolver(generateUrlSchema),
  })

  const [url, setUrl] = useState<string|null>(null)

  const handleOnSubmit: SubmitHandler<GenerateUrlSchema> = async (data) => {
    toast.dismiss()
    
    const id = await generateUrl(data)
    
    if (id === null) {
      toast.error("Failed to generate URL!")
      return
    }
    const { origin } = window.location
    setUrl(`${origin}/${id}`)
    toast.success("The given url is succesfully shrtnd!")
  }

  useKeyboard(() => closeModal(), "Escape")
  useKeyboard(() => handleSubmit(handleOnSubmit), "Enter")

  if (errors.url?.message) {
    toast.error(errors.url?.message)
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-50 bg-opacity-25 backdrop-blur-sm transition-opacity" aria-hidden="true" />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mx-auto max-w-xl transform divide-y divide-primary dark:divide-d-primary overflow-hidden rounded-xl bg-background dark:bg-d-background shadow-xl transition-all">
          <div className="relative">
            <svg
              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-text dark:text-d-text"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <input
              autoFocus={true}
              {...register("url")}
              className="h-12 w-full bg-transparent pl-11 pr-4 text-text dark:text-d-text placeholder-gray-400 sm:text-s focus:outline-none caret-accent dark:caret-d-accent"
              placeholder="Type or paste your link..."
              role="combobox"
              aria-expanded="false"
              aria-controls="options"
              aria-invalid={errors.url?.message ? "true" : "false"}
            />
            <kbd
              onClick={() => closeModal()}
              className="absolute top-3.5 right-4 mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white py-2.5 px-4 text-xs text-gray-900 sm:mx-2"
            >
            ESC
            </kbd>
          </div>
          {
            url &&
            <ul className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2" id="options" role="listbox">
              <li className="font-bold">{url}</li>
            </ul>
          }
          <button className="flex flex-wrap w-full items-center bg-background dark:bg-d-background py-2.5 px-4 text-xs text-text dark:text-d-text">
            Press
            <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2">
            &crarr;
            </kbd>
            <span className="hidden sm:inline">to generate a link!</span>
          </button>
        </div>
      </form>
    </div>
  )
}