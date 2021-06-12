import * as Styled from './ProductDescription.styled'

export type ProductDescriptionProps = {
  name: string
  description: string
  price: string
}

export const ProductDescription = ({
  name,
  description,
  price,
}: ProductDescriptionProps) => {
  return (
    <Styled.Container>
      <h2>{name}</h2>
      <p>
        {description.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
        <br />
      </p>
      <span>{price}</span>
    </Styled.Container>
  )
}
