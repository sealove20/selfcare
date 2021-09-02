import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from 'components/Button'
import { Header } from 'components/Header'
import { Layout } from 'components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default Home
