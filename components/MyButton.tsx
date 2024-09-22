import '@/styles/MyButton.css'


// Declare type of count and onClick above
type MyButtonProps = {
  name: string;
  onClick: () => void;
}

export default function MyButton({ name, onClick }: MyButtonProps) {
  return (
    <button className="my-button" onClick={onClick}>
      {name}
    </button>
  )
}
