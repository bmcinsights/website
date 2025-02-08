import React from "react";

const BlogPost = () => {
  return (
    <section className="min-h-screen bg-background text-text flex my-8 justify-center p-4 pt-8">
      <article className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Floods - Monsoon Season in Nepal
          </h1>
          <div className="text-text opacity-80 text-lg">
            <span>by </span>
            <span className="font-semibold">Tenzing Sherpa</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mt-4 mb-8">
          <img 
            src="/images/floods.jpg" 
            alt="Monsoon floods in Nepal"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <p className="text-text text-xl leading-relaxed">
            <span className="font-semibold">Nepal, 19 August 2024:</span> It has
            been a dreadful month of frantic searches for umbrellas, and staying
            in as much as possible. Just after a scorching hot summer, the monsoon
            rain began almost immediately. While this has been occurring everyday,
            how much do we actually know about it? Let us go into detail about the
            inevitable monsoon season.
          </p>

          {/* What is a monsoon */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              First of all, what is a monsoon?
            </h2>
            <p className="text-text text-xl leading-relaxed">
              A monsoon is a seasonal change of the direction of the strongest winds 
              of a region.
            </p>
          </div>

          {/* How monsoons form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              How does a monsoon exactly form?
            </h2>
            <p className="text-text text-xl leading-relaxed">
              Monsoon winds flow from cold to warm regions. The monsoon Nepal faces 
              is known as the summer monsoon, which is associated mainly with heavy 
              rainfall. In the high temperatures during summer, water in the Indian 
              Ocean evaporates and rises into the air. The warm and moist air soon 
              condenses and forms rain. The summer monsoon affects countries like 
              India, Nepal and Pakistan.
            </p>
          </div>

          {/* Effects Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Severe, and possibly fatal effects of monsoons
            </h2>
            <p className="text-text text-xl leading-relaxed">
              An obvious disadvantage the monsoon season brings is the uncontrollable 
              and very inconvenient rain. This leads to heavy floods that lead to 
              damaged infrastructure, loss of lives and landslides.
            </p>
          </div>

          {/* Incident Reports */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                10 July 2024: Fatal landslide, Pokhara, Nepal
              </h3>
              <p className="text-text text-xl leading-relaxed">
                It had rained for days in a row in Pokhara. An unfortunate series 
                of events, followed by a landslide, buried a house and a man inside 
                passed away as well. Fortunately, one of the house residents survived 
                and was rescued.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                12 July 2024: Landside at Simaltal, Nepal
              </h3>
              <p className="text-text text-xl leading-relaxed">
                At around 3:30 A.M, a devastating landslide hit two buses of passengers 
                traveling along the route from Narayanghat to Mugling about 75 km west 
                of Kathmandu. Both of the vehicles were swept into the Trisuli river, 
                which was already overflowing due to the rain. There were a total of 65 
                people on board and only 3 among them had managed to swim to the riverbank. 
                However, due to the waters turning a questionable brown due to it being 
                mixed with soil and other pollutants, rescue efforts were hampered as it 
                consumed the debris. Armed forces, as well as the police, were sent on 
                rafts in a futile hunt for possible remaining survivors. A short time 
                after, another bus had been hit by a landslide just a stone's throw away 
                on the same highway. Although there is not much news about this accident, 
                it has been reported that the driver had tragically passed away.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              The brighter side of monsoons
            </h2>
            <p className="text-text text-xl leading-relaxed">
              The pouring rain that monsoons produce can also be beneficial in some 
              aspects. For instance, good monsoons make for adequate rain, which results 
              in a bountiful crop. This allows farmers to have higher income as they get 
              to sell more agricultural produce, not to mention being able to integrate 
              fresh ingredients directly from the farms into their meals. Additionally, 
              the rainy season gives us a well-deserved break from the summers of Nepal 
              that grow more unbearable every year. Regardless, the benefits, in my 
              opinion, are undoubtedly outweighed by the disadvantages. No matter how 
              much there is in the amount of crops, it will never make up for the grief 
              felt by the loved ones of the victims. Hence, the Nepal government should 
              take more measures to ensure Nepal's citizens are protected in the face of 
              any disaster thrown at her.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;