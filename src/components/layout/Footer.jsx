import React from 'react'

function Footer() {

  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer footer-center p-10 bg-gray-700 text-primary-content'>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved.</p>
        <h5>Follow up from Brad Traversy Media</h5>
      </div>
    </footer>
  )
}

export default Footer
