import Header from "../components/Header/Header"
import Banner from "../components/Body/Banner"
import BlockOne from "../components/Blocks/BlockOne"
import BlockTwo from "../components/Blocks/BlockTwo"
import TitleComponent from "../components/Body/CustomerReviews/TitleComponent"
import StopBehaviors from "../components/BoardAndTrain/StopBehaviors"
import Footer from "../components/Footer/Footer"


const boardAndTrainInfo = {
    title: 'Board and Train Obedience Training Program',
    text: 'I use positive reinforcement dog training methods to help your dog be the best he can be. With gentle and proven training techniques, I can stop and prevent behavior problems in your dog for good.'
}

const blockOne = {
    title: 'What is Board and Train?',
    text: 'During your dogs stay, I will provide daily training sessions to build a solid obedience foundation and address any behavioral issues. Your dog will be taught to respond consistently to verbal commands and hand signals—without the need for harsh corrections or e-collars. Through fun and stimulating exercises, your dog will quickly develop proper manners, confidence, and self-control, ensuring they return home with royal poise!'
}

const dogBehaviorIssues = [{
    title: "My Dog is Tearing the House Apart!",
    text: "Digging up the yard, chewing on furniture, tearing up everything in sight, and raiding the trash bin.",
},
{
    title: "The Neighbors are Complaining Non-Stop!",
    text: "Constant barking, battling with other dogs through the fence, and dashing out the door at every opportunity.",
},
{
    title: "My Dog Ignores Me Completely!",
    text: "Refuses to come when called and drags me down the street during walks.",
}]

const whatWillItDoObj = {
    title: 'What Can Our Board and Train Program Do for You and Your Dog? ',
    text: 'Our Board and Train Obedience Programs offer a highly effective solution to achieve all your dog training and puppy training objectives!'
}

const whatWillItDoListItems = [
    'Prevent unwanted behaviors through a personalized training plan tailored to your dogs unique needs.',
    'Address and eliminate challenging, bothersome, or even dangerous behaviors in adolescent or adult dogs',
    'Foster lasting peace and harmony in your home.',
    'Establish a solid obedience foundation that you can continue to build on for years to come.'
]

export default function BoardAndTrain() {
    return (
        <>
            <Header />
            <Banner title={boardAndTrainInfo.title} text={boardAndTrainInfo.text} />
            <BlockOne title={blockOne.title} text={blockOne.text} />
            <BlockTwo title={whatWillItDoObj.title} text={whatWillItDoObj.text} listItems={whatWillItDoListItems} />
            <TitleComponent title="Stop and Prevent Your Dog's Nussiance Behaviors" />
            {dogBehaviorIssues.map((e) => {
                return <StopBehaviors title={e.title} text={e.text} />
            })}
            <Footer />
        </>
    )
}