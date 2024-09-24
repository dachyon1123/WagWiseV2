import Header from "../components/Header/Header"
import Banner from "../components/Homepage/Banner"
import CollapseFaq from "../components/FAQ/CollapseFaq"
import Footer from "../components/Footer/Footer"

import bannerImage from '../assets/pictures/faqImage.webp'

const questions = [
    {
        title: 'Do you use prong collars?',
        text: "Yes, I do use prong collars in my training. While prong collars have gained a negative reputation as being harsh or inhumane, this perception stems from improper use. In the wrong hands, they can indeed cause harm. However, when used correctly, prong collars serve as a safe and effective communication tool between me and the dogs I train. My priority is always the well-being of the dog, and under my guidance, prong collars are used responsibly and never cause pain or injury. Effective dog training is built on clear communication. This communication involves providing feedback—letting the dog know when their behavior is correct, incorrect, or needs improvement. Just as important, though, is offering clear direction so the dog understands what you're asking of them. A prong collar is a tool that aids in delivering this feedback effectively, helping to guide the dog in a way that fosters better understanding and responsiveness."
    },
    {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

export default function Faq() {
    return (
        <>
            <Header />
            <Banner title="FAQ" text='Frequently Asked Questions' image={bannerImage} buttonText="" />
            <div style={{ marginBottom: 75 }}></div>
            {questions.map((q) => {
                return <CollapseFaq title={q.title} text={q.text} />
            })}
            <div style={{ marginTop: 75 }}></div>
            <Footer />
        </>
    )
}