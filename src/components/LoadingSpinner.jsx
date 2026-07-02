export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-brand-gold/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-brand-gold rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/background.png" alt="Kelev Security" className="w-16 h-16 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
