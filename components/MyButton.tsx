import '@/styles/MyButton.css'


// Declare type of count and onClick above
type MyButtonProps = {
  name: string;
  onClick: () => void;
}

export default function MyButton({ name, onClick }: MyButtonProps) {
  return (
    <button className="w-[10rem] rounded-[8px] border border-solid border-black border-transparent py-2 px-4 text-base font-medium cursor-pointer transition-colors duration-300 text-white bg-black my-1" onClick={onClick}>
      {name}
    </button>
  )
}
