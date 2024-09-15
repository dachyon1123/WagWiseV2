import Header from "../components/Header/Header"
import Banner from "../components/Body/Banner"
import WhatIsBoard from "../components/BoardAndTrain/WhatIsBoard"
import WhatWillItDo from "../components/BoardAndTrain/WhatWillItDo"
import TitleComponent from "../components/Body/CustomerReviews/TitleComponent"
import StopBehaviors from "../components/BoardAndTrain/StopBehaviors"
import Footer from "../components/Footer/Footer"

const boardAndTrainInfo = {
    title: 'Board and Train Obedience Training Program',
    text: 'I use positive reinforcement dog training methods to help your dog be the best he can be. With gentle and proven training techniques, I can stop and prevent behavior problems in your dog for good.'
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

export default function BoardAndTrain() {
    return (
        <>
            <Header />
            <Banner title={boardAndTrainInfo.title} text={boardAndTrainInfo.text} />
            <WhatIsBoard />
            <WhatWillItDo />
            <TitleComponent title="Stop and Prevent Your Dog's Nussiance Behaviors" />
            {dogBehaviorIssues.map((e) => {
                return <StopBehaviors title={e.title} text={e.text} />
            })}
            <Footer />
        </>
    )
}