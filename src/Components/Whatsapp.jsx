export default function Whatsapp() {
    return(
      <>
        <a href="https://api.whatsapp.com/send/?phone=%2B971507904850&text&type=phone_number&app_absent=0" className="fixed z-99 bottom-0 right-0 m-5 xl:m-10 h-15 w-15 p-3 bg-green-700 rounded-full">
          <img src="/whatsapp.png" alt="" />
        </a>
      </>  
    )
}