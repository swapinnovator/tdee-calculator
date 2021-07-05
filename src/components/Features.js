import Heart from "assets/images/heart.svg";


function Features(){
    const FeatureTitle = "Feature in this app";
    const FeatureDescription = "We provide that's awesome feature that helps.";

    const Features = [{
        'featureIcon': Heart,
        'featureHead' : 'BMI of under 18.5',
        'featureContent' : 'A BMI of under 18.5 indicates that a person has insufficient weight, so they may need to put on some weight. They should ask a doctor or dietitian for advice.',
    },
    {
        'featureIcon': Heart,
        'featureHead' : 'BMI of 18.5–24.9',
        'featureContent' : 'A BMI of 18.5–24.9 indicates that a person has a healthy weight for their height. By maintaining a healthy weight, they can lower their risk of developing serious health problems.',
    },
    {
        'featureIcon': Heart,
        'featureHead' : 'BMI of 25–29.9',
        'featureContent' : 'A BMI of 25–29.9 indicates that a person is slightly overweight. A doctor may advise them to lose some weight for health reasons. They should talk with a doctor or dietitian for advice.',
    },
    {
        'featureIcon': Heart,
        'featureHead' : 'BMI of over 30',
        'featureContent' : 'A BMI of over 30 indicates that a person has obesity. Their health may be at risk if they do not lose weight. They should talk with a doctor or dietitian for advice.',
    }];



    return(
        <>
        <div className="featureDiv" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="featurePattern" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"></div>
            <div className="featureSec" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <div className="container">
                    <div className="featureHead">
                        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">{FeatureTitle}</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">{FeatureDescription}</p>
                    </div>
                    <div className="features">
                        {Features.map((item, index) =>

                            <div className="featureCol" key={index}>
                                <div className="featureIcon" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                                    <img src={item.featureIcon} />
                                </div>
                                <div className="featureText">
                                    <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">{item.featureHead}</h3>
                                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">{item.featureContent}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Features;
