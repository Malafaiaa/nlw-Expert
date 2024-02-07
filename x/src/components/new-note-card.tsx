import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewCard() {
    const [shouldShowOnboarding, setShouldOnboarding] = useState(true)
    const [content, setContent] = useState('')

    function handleStartEditor() {
        setShouldOnboarding(false)
    }
    function handleContentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if (event.target.value === ''){
            setShouldOnboarding(true)
        }
    }
    
    function handleSaveNote(event: FormEvent){
        event.preventDefault()
        console.log(content) 
        
        toast.success('ERGAM-SE')

    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 outline-none">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

            <Dialog.DialogPortal>
                <Dialog.DialogOverlay className="inset-0 fixed bg-black/50" />
                <Dialog.DialogContent className=" overflow-hidden fixed left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">

                    <Dialog.Close className="absolute right-0 top-0  p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5"/>

                    </Dialog.Close>

                    <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">


                    <div className="flex flex-1 flex-col gap-3 p-5 ">

                        <span className='text-sm font-mediumtext-slate-300 c'>Adicionar nota</span>
                        {shouldShowOnboarding ? (
                            
                        <p className='text-sm leading-6 text-slate-400'>Comece <button className="font-medium text-blue-400 hover:underline">gravando uma nota em áudio</button> ou se preferir <button onClick={handleStartEditor} className="font-medium text-blue-400 hover:underline">utlize apenas texto</button>
                        </p>
                        ): (
                            <textarea
                            autoFocus
                             className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                             onChange={handleContentChange}

                             >

                             </textarea>
                        )}

                    </div>

                    <button
                     type="submit"
                     className="w-full bg-blue-600 py-4 text-center text-sm text-blue-50 outline-none font-medium hover:bg-blue-700"
                     >
                      Salvar nota
                     </button>
                     </form>
                </Dialog.DialogContent>
            </Dialog.DialogPortal>

        </Dialog.Root>


    )


}