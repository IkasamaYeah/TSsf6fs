type Props = {
  name: string
  age?:number
  sex?:string
}

export function Components ({name,age,sex}: Props) {
  return(<>
  <div>
    <h1>{name}</h1>
  </div>
  </>)
}