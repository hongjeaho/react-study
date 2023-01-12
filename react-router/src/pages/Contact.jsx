import React from 'react'
import styled from '@emotion/styled/macro'
import {useLoaderData} from 'react-router-dom'
import { getUser } from '../data/contactData'

const ProfileImg = styled.img`
  width: 12rem;
  height: 12rem;
  background: #c8c8c8;
  margin-right: 2rem;
  border-radius: 1.5rem;
  object-fit: cover;
`

const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

const TwitterLink = styled.a`
  display: flex;
  font-size: 1.5rem;
  color: #3992ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Base = styled.div`
  max-width: 40rem;
  display: flex;

  ${Title} + p {
    margin: 0;
  }

  ${Title} ~ div {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0; 
  }
`
const FavoriteForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;

  button {
    box-shadow: none;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0;
  }

  button[value="true"] {
    color: #a4a4a4;
  }
`

export async function loader({params}) {
  const contact = await getUser(Number(params.id))
  return { contact }
}

export default function Contact() {
  const { contact } = useLoaderData()

  const handlerDelete = (event) => {
    const result = window.confirm('please confirm you want to delete this record')
    
    if(!result) {
      event.preventDefault()
    }
  }

  return (
    <Base>
      <div>
        <ProfileImg key={contact.avatar} src={contact.avatar || null} />
      </div>
      <div>
        <Title>
          {
            contact.name ? <>{contact.name}</>
              : <i>no name</i>
          }
          {" "}<Favorite contact={contact} />
        </Title>
        
        {contact.twitter && (
          <p>
            <TwitterLink target={'_blank'} href={`https://twitter.com/${contact.twitter}`} >{contact.twitter}</TwitterLink>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <form method="get" action="edit">
            <button type='submit'>Edit</button>
          </form>
          <form method='post' action='destroy' onSubmit={handlerDelete}>
            <button type='submit'>Delete</button>
          </form>
        </div>
      </div>
    </Base>
  )
}

const Favorite = ({contact}) => {
  return (
    <FavoriteForm method="post">
        <button value={contact.favorite ? false : true }> { contact.favorite ? "★" : "☆"}</button>
    </FavoriteForm>
  )
}