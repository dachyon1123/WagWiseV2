import Header from "../components/Header/Header"
import Banner from "../components/Body/Banner"
import BlockOne from "../components/Blocks/BlockOne"
import InfoBlocks from "../components/Body/InfoBlocks"
import Footer from "../components/Footer/Footer"


const boardAndTrainInfo = {
    title: 'Private Dog Training',
    text: 'Get personalized help with your dog from a certified dog trainer.'
}

const blockOneInfo = {
    title: 'How Does It Work?',
    text: 'I provided 1 hour, one-on-one training sessions with your dog and I, where I provide you and your dog with the tools needed to make your dog into his best self. I use positive reinforcement training and reward-based methods. '
}

const howItWorks = [
    {
        step: 1,
        title: "Schedule Your Session",
        text: "Simply book a convenient time for your one-hour personalized training session. We’ll gather some basic info about your dog to tailor the session to their specific needs."
    },
    {
        step: 2,
        title: "Personalized Training Plan",
        text: "Before the session, we create a customized plan based on your dog’s behavior, temperament, and training goals. Whether it’s basic obedience, problem behaviors, or advanced training, we’re here to help."
    },
    {
        step: 3,
        title: "One-on-One Training",
        text: "During the session, you and your dog will work directly with our experienced trainer. You’ll receive hands-on guidance, practical exercises, and real-time feedback to address specific challenges and reinforce positive behavior."
    },
    {
        step: 4,
        title: "Interactive Learning",
        text: "We believe in training both dogs and their owners! You’ll learn key techniques and commands to continue reinforcing the training at home, ensuring long-lasting results."
    },
    {
        step: 5,
        title: "Follow-Up & Support",
        text: "After the session, we provide additional tips and resources to help you maintain progress. If needed, we’re always available for follow-up questions or additional sessions."
    }
];


export default function DogTraining() {
    return (
        <>
            <Header />
            <Banner title={boardAndTrainInfo.title} text={boardAndTrainInfo.text} />
            <BlockOne title={blockOneInfo.title} text={blockOneInfo.text} />
            <Footer />
        </>
    )
}