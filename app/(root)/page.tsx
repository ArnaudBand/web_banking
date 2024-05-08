import HeaderBox from '@/components/headerBox';
import TotalBalanceBox from '@/components/totalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "John"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access your account information, transfer funds, and more."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={0}
          />
        </header>
      </div>
    </section>
  )
}

export default Home;