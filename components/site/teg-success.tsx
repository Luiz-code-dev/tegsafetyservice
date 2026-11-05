import Image from 'next/image'
import { cn } from '@/lib/utils'

export function TegSuccess({ onReset, className }: { onReset?: () => void; className?: string }) {
  return (
    <div role="status" className={cn('flex flex-col items-center justify-center gap-4 text-center', className)}>
      <div className="overflow-hidden rounded-2xl bg-[#0a0f0d]">
        <Image
          src="/teg/teg-thumbs.png"
          alt="Teg, o mascote da T&G, fazendo sinal de positivo"
          width={704}
          height={384}
          className="h-44 w-auto object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-balance">Mensagem enviada!</h3>
      <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
        Obrigado pelo contato. Você receberá uma confirmação por e-mail e nossa equipe retornará em breve.
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-primary underline underline-offset-4"
        >
          Enviar outra mensagem
        </button>
      )}
    </div>
  )
}
