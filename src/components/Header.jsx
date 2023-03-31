import logoRekordbox from '../assets/logo_rekordbox.png'

export default function Header() {
  return (
    <header className='bg-[#222222] flex-col justify-center text-center'>
      <img className='mx-auto py-4 w-64 h-auto' src={logoRekordbox}></img>
      <h1 className='text-white font-bold text-5xl pb-2'>Rekordbox CUE Converter</h1>
      <h2 className='font-bold text-2xl text-[#027DE1] pt-2 pb-6 uppercase'>Convert .cue files into readable setlists</h2>
    </header>
  )
}
