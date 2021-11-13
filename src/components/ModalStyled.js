import styled from 'styled-components'

export const ContainerModal = styled.div`
  width: clamp(300px, 90vw, 400px);
  height: auto;
  display: flex; 
  flex-flow: column wrap;
  margin: auto;
  margin-top: 20vh;
  justify-content: space-evenly;
  background-color: whitesmoke;
  border-radius: 1rem;
  border:  1px solid var(--color-secondary);
  padding: 1rem;
  > div{
    margin: 0.5rem 0;
  }
`

