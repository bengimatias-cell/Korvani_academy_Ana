interface SectionHeaderProps {
  numero: string;
  titulo: string;
  subtitulo?: string;
}

export function SectionHeader({ numero, titulo, subtitulo }: SectionHeaderProps) {
  return (
    <header className="mb-10 animate-fade-up">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono-data text-sm text-signal tracking-wider">
          MÓDULO {numero}
        </span>
        <span className="h-px flex-1 bg-border-soft" />
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text">
        {titulo}
      </h1>
      {subtitulo && (
        <p className="mt-4 text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
          {subtitulo}
        </p>
      )}
    </header>
  );
}
