import TabsOrange from "@/components/treatments/TabsOrange";
import White2box from "@/components/treatments/white2box";
import { desc, head, title } from "framer-motion/client";

export const slugData = {
  // ─────────────────────────────────────────────────────────────────────────
  // SLUG: lower-back-pain
  // ─────────────────────────────────────────────────────────────────────────
  "spinal-problems": {
    hero: {
      title: "Ayurvedic Treatment For Spinal Problems in Kerala",
      description:
        "SreeRudra Ayurveda Multispecialty Hospital in Alappuzha, Kerala, India, is the ideal destination for those seeking lasting relief from back pain. Situated in a serene and peaceful environment, this hospital provides the perfect setting for individuals to find a complete cure. With a team of experienced and skilled practitioners, the hospital offers a unique combination of Ayurvedic treatments tailored to each patient's needs.",
      image: "/images/spine.jpg",
      imageAlt: "Spinal Treatment",
    },
    grids: {
      heading: "Spine/Disc Conditions",
      items: [
        "Arthritis",
        "Herniated Disc",
        "Spondylosis",
        "Degenerative Disc Disease",
        "Spinal Stenosis",
        "Chronic Pain In The Back And Spine",
        "Osteoporosis",
        "Scoliosis",
        "Spinal Cord Cancer",
        "Spinal Tumour",
      ],
    },
    risks: {
      heading: "Top Risks You Can't Ignore",
      items: [
        { text: "Age", img: "/images/age.png" },
        { text: "Physically demanding jobs", img: "/images/physic.png" },
        { text: "Certain Sports & Occupation", img: "/images/yoga.png" },
        { text: "Excess Weight", img: "/images/weight.png" },
        { text: "Lack of Exercise", img: "/images/exercise.png" },
        { text: "Smoking", img: "/images/smoke.png" },
      ],
      videoSection: {
        heading: "Treatment Explained by a Doctor",
        subtext:
          "Understand the procedure, benefits, and important facts directly from a doctor.",
        image: "/images/doctor.png",
      },
    },
    headparabut1: {
      image: "/images/lowerbackpain.jpg",
      heading: "Lower Back Pain",
      description:
        "The low back is a well-engineered structure of bones, nerves, and joints that provide support, strength, and flexibility. It is the condition that occurs when the bone and cartilages undergo wear and tear. The causes of this condition involve bone spurs, dehydrated spinal disk, herniated disks, injury etc. The risk factors include neck injuries, work-related activities, holding the neck in an uncomfortable position for longer periods. The pains can be of different types such as pain that travels down the leg, sharp stabbing pain, or a dull aching feeling. Early intervention is key to preventing long-term damage and improving quality of life.",
    },
    causes: {
      heading: "Causes",
      items: [
        {
          icon: "Bone",
          title: "Overgrowth Of Bones / Bone Spurs",
          description:
            "Osteoarthritis results in wear and tear damage to the bones. This prompts the body to try and grow extra bones in an effort to make a stronger spine. Instead of strengthening the spine, these overgrowths have a chance to press on the spinal cord and nerves which are the delicate areas in the spine. This pressing results in pain in the lower back.",
        },
        {
          icon: "Activity",
          title: "Herniated Discs",
          description:
            "It is a condition where the disc placed between the spinal bones ruptures making the inner portion of the disc called the nucleus, which is soft, protrude through the hard exterior ring called the annulus. This is most usually caused by wear and tear damage to the outer ring of the discs.",
        },
      ],
    },
    medicalAttention: {
      heading: "Medical Attention Needs To Be Taken In Case Of The Following",
      items: [
        {
          icon: "TrendingUp",
          title: "Progressive Symptoms",
          description:
            "If the symptoms of numbness, weakness, and pain seem to worsen over time in such a manner that it affects the daily activities.",
        },
        {
          icon: "Droplets",
          title: "Difficulties with bowels",
          description:
            "The conditions may worsen to an extent when urination tends to be difficult even while having a full bladder.",
        },
        {
          icon: "Syringe",
          title: "Saddle block anesthesia",
          description:
            "The condition might progress to having loss of sensation around the areas like buttocks, inner thighs, and perennium.",
        },
      ],
    },
    prevention: {
      heading: "Prevention",
      items: [
        {
          icon: "Sport",
          title: "Exercise",
          text: "The best treatment for low back pain is strengthening the trunk muscles by doing exercises.",
        },
        {
          icon: "Droplets",
          title: "Posture correction",
          text: "Maintain posture that doesn't put pressure on the spine and discs.",
        },
        {
          icon: "HeartPlus",
          title: "Healthy weight",
          text: "Added weight increases pressure on the spine and discs.",
        },
        {
          icon: "Cigarette",
          title: "Avoid Smoking",
          text: "Reduce the usage of smoking or tobacco products.",
        },
      ],
    },
    causeCards: {
      heading: "What's Causing Your Low Back Pain?",
      items: [
        {
          label: "Genetics",
          subtext: "What is lumbar spine pain and how does Ayurveda view it?",
        },
        { label: "Posture" },
        { label: "Injury" },
        { label: "Degeneration" },
        { label: "Obesity" },
        { label: "Sedentary Lifestyle" },
        { label: "Stress" },
        { label: "Age Factor" },
      ],
    },
    treatments: {
      heading: "Spine Pain Treatments in Ayurveda",
      items: [
        { title: "Abhyanga", desc: "(Massage with medicated oil)" },
        { title: "Swedana", desc: "(Steam, generally carried after abhyanga)" },
        { title: "Kati Vasti", desc: "(Oil pooling over the low back)" },
        {
          title: "Patrapindasweda",
          desc: "(Medicated fomentation through pain-relieving herbs)",
        },
        { title: "Upanaha", desc: "(Application of herbal pastes)" },
        { title: "Virechana", desc: "(Therapeutic purgation)" },
        { title: "Vasti", desc: "(Medicated enema)" },
        { title: "Meru C", desc: "(Light touches along the spine)" },
      ],
    },
    ourTreatments: {
      heading: "Our Treatment",
      tabs: [
        "Lifestyle",
        "Pain & Ortho",
        "Neuro",
        "Women & Wellness",
        "Specialized Care",
      ],
      cards: [
        { title: "Mental Disorder", img: "treatment1.png" },
        { title: "Lung Disorders", img: "treatment2.png" },
        { title: "Liver Cirrhosis", img: "treatment3.png" },
        { title: "Spinal Problem", img: "treatment4.png" },
        { title: "Mental Disorder", img: "treatment1.png" },
        { title: "Mental Disorder", img: "treatment1.png" },
      ],
    },
    faqs: {
      heading: "Frequently asked questions",
      image: "/images/faq.png",
      items: [
        {
          question:
            "What is lumbar spine pain and how does Ayurveda view it?",
          answer:
            "Lumbar spine pain, commonly referred to as lower back pain, occurs due to issues such as muscle strain, disc degeneration, or poor posture.",
        },
        {
          question:
            "How effective is Ayurvedic treatment for lumbar spine pain?",
          answer:
            "Ayurvedic treatments focus on root cause healing using therapies, herbs, and lifestyle changes.",
        },
        {
          question:
            "How long does it take to see improvement in lumbar spine pain with Ayurveda?",
          answer:
            "Improvement depends on severity but typically starts within a few weeks.",
        },
        {
          question:
            "What is the difference between Ayurvedic and modern treatments for lumbar spine pain?",
          answer:
            "Ayurveda focuses on holistic healing while modern medicine targets symptom relief.",
        },
        {
          question: "Are Ayurvedic spinal treatments suitable for all age groups?",
          answer:
            "Yes, treatments are generally safe but should be guided by a professional.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLUG: neck-pain
  // ─────────────────────────────────────────────────────────────────────────
  "cervical-spondylosis": {
    hero: {
      title: "Ayurvedic Treatment for Cervical Spondylosis In Kerala ",
      description:
        "The spinal cord and nerves pass through vertebrae which protect and support them. 26 of such vertebrae make up the spine. The spinal discs are a staunch spindle that is elastic in nature which is present in each of the spine joint segments. These discs are what provide a wide range of motion for the neck as well as the lower back.Over time, due to the various stresses the lower back and neck are put through, as well as ageing, the discs tend to lose their pliancy, which may result in painful and possibly impairing symptoms that may result in limited mobility. While allopathic treatments for spinal disorders are mostly surgical procedures, Ayurvedic treatment for spinal problems relies on restoring the imbalanced doshas to treat spinal disorders.",
      image: "/images/neck1.png",
      imageAlt: "Neck Pain Treatment",
    },
    susceptible: {
      heading: "Who Are More Susceptible?",
      items: [
        "People with a sedentary lifestyle",
        "Aged persons",
        "People with previous injuries to the neck",
        "People with digestive disorders",
        "People with the heredity of Arthritis.",
        "People lifting heavy weights regularly",
        "IT professionals or people who are using computers and typing instruments for a prolonged time",
        "People with hormonal disorders like hypo/ hyper-thyroidism, PCOS, auto immune diseases.",
      ],
    },
    seperate2box: {
      heading: "Causes",

      description:
        "Ayurvedic Treatment for Cervical spondylosis is a disease which affects inter vertebral discs of cervical vertebrae. For understanding the pathology, cervical spine anatomy should be understood. Cervical spine contain 7 vertebrae. A spongy gel like substance is situated between two vertebrae called intervertebral disc(IV Disc) which provide a cushioning effect. Cervical nerves are emerging out from pathways corresponding to spine. In cervical spondylosis, these IV discs and vertebrae are affected in different manner. ",

      leftTitle: "Causes Can Be Summarized As Below",

      leftItems: [
        "Dehydrated discs: In this condition discs may loss its spongy nature and become dry results in direct bone to bone contact which cause pain.",
        "Intervetebral disc prolapse: Sometime IV discs may slip from vertebral space causing compression to nerve roots resulting in pain, numbness and disabilities.",
        "Bone spurs: Degeneration of vertebrae sometime results in abnormal growth of bony structure called as spur. This may come in contact with nerve root or spine."
      ],

      rightTitle: "Symptoms",

      rightItems: [
        "Pain over the cervical region usually increased by excess movement and strain",
        "Referred pain: pain may transfer to the back of head, shoulders and upper arms",
        "Feel of giddiness on the sudden movement of the head",
        "Numbness, tingling, or weakness in upper limbs",
        "Intermittent pain in the neck and upper back",
        "Stiffness of neck"
      ]
    },
    headparabut1: {
      heading: "Investigations",
      description: "Radiological image techniques like X-ray, MRI or CT of cervical spines will give an exact impression about the underlying pathology.Blood tests for reactive diseases, hormonal imbalance, auto-immune disorders are also helpful.",
    },

    ayurvedicAspect: {
      heading: "Ayurvedic Aspects Of Cervical Spondylosis",
      description: "All the degenerative conditions are classified in Ayurveda under Vata disease. Different diseases described in Charak Samhita, Susrutha Samhita and Ashtanga Hridaya like Viswachi, Manyasthambha, and Greevagraha, etc have one more symptom similar to Cervical spondylosis.",
      cards: [
        {
          title: "Guggulu(Commiphora Mukul)",

          description: "This is a well-known drug in Ayurveda which reduces inflammation, it also possesses anti-arthritic properties. Ayurvedic formulations like Gugguluthiktakam Kashayam, Yograja Guggulu,Trayodasanga Guggulu, Kaisore Guggulu, etc are commonly used in the ayurvedic treatment of cervical spondylosis."
        },
        {
          title: "Medicines",

          description: "A wide range of medicines is available in Ayurveda to manage vatha diseases. They will pacify vatha and reduce inflammation and pain. When kapha alleviated, stiffness will be reduced. The application of medicinal pastes(lepa) will be highly beneficial to reduce inflammations. Medicated ghee is given to regain the unctuousness."
        },
        {
          title: "Chikithsa",

          description: "Aches and pain management is one of the strongest positives of Ayurveda. Aim of treatment to restore bone strength and rehydrate them. But just applying some oils will not give you any benefits. Proper medicines with panchakarma therapies associated with yoga and lifestyle management will be beneficial to a great extent."
        }
      ]
    },
    nonmedicinal: {
      heading: "Non Medicinal Management",

      description:
        "Various non medicinal approaches help in reducing cervical pain, improving flexibility and maintaining muscular strength.",

      items: [
        "Immobilization Of Neck With Help Of Collars Or Any Other Measures To Reduce Acute Pain",
        "Mechanical Tractions Are Widely Used Technique For Treating Spondylosis",
        "Isometric Cervical Exercises Will Help To Retain Muscular Tone",
        "Occupational Therapies To Improve Quality Of Life",
        "Lifestyle Modifications May Involve An Evaluation Of Workplace Ergonomics, Postural Training, Neck-School, Stress Management Etc"
      ]
    },
      tabsorange: {
        heading: "Other Formulations Used For Cervical Spondylosis Are",

        items: [
          {
            title: "RASNASAPTAKAM KASHAYAM"
          },

          {
            title: "ASHTAVARGAM KASHAYAM"
          },

          {
            title: "PRASARINYADI KASHAYAM"
          },

          {
            title: "DASHAMOOLA RASNADI KASHAYAM"
          },

          {
            title: "DHANADANAYANADI KASHAYAM"
          },

          {
            title: "ASWAGANDHA CHOORNAM"
          },

          {
            title: "KARPASASTHYADI THAILAM"
          },

          {
            title: "DHANWANTHARA ARISHTAM"
          },

          {
            title: "PRABHANJANAM KUZHAMBU"
          },

          {
            title: "PRASARINYADI THAILAM"
          },

          {
            title: "ASWAGANDHARISHTAM"
          },

          {
            title: "BALARISHTAM"
          }
        ]
      },

    panchakarma: {
        heading: "Panchakarma",

        descriptions: [
          "Nasya is the best choice to treat diseases of the upper part of the body. Nasya simultaneously controls both vatha and kapha.",

          "Nasya stimulates the brain through an olfactory pathway, structures of the Limbic system including Thalamus, Hypothalamus, Hippocampus, Amygdala, and parts of the Basal ganglia which are concentration areas for neuropeptides called nodal points. Nasya can stimulate areas like Amygdala in the Limbic system, thus activating the neuropeptide pathway which helps to reduce pain.",

          "Nasya with a nourishing drug can induce some nourishment to tissues by impregnating Kapha and reduce degeneration thus reduce stiffness."
        ],

        modalitiesHeading: "Treatment Modalities",

        modalities: [
          "Pathra pinda sweda (poultice with herbs), one among the common treatment modality in keraleeya ayurvedic treatment.",

          "Greeva vasthi (pooling of medicated oil over neck region), taila dhara (pouring vatha hara oils over neck region) for giving nourishment effect also reduce dehydration of IV discs.",

          "Gentle abhyanga (oil massage) also useful to reduce pain but vigorous massages may aggravate the condition.",

          "Njavara kizhi gives back muscular strength, relieves spasm and regains tone. Also provides a rejuvenating effect.",

          "Choorna Pinda Sweda (poultice prepared with medicated powders) to relieve stiffness and inflammation.",

          "It relieves para-vertebral muscle spasm.",

          "Strengthens para-vertebral muscles.",

          "Strengthens intervertebral discs.",

          "Has a local anti-inflammatory effect.",

          "Helps repair damaged myelin sheath."
        ]
     },

    faqs: {
      heading: "Frequently asked questions",
      image: "/images/faq.png",
      items: [
        {
          question: "What causes chronic neck pain?",
          answer:
            "Chronic neck pain is most commonly caused by disc degeneration, poor posture, muscle tension, or past injuries that have not fully healed.",
        },
        {
          question:
            "Can Ayurveda permanently cure cervical spondylosis?",
          answer:
            "Ayurvedic treatments can significantly reduce symptoms and slow disease progression by addressing the root dosha imbalance.",
        },
        {
          question:
            "How many sessions are typically needed for neck pain relief?",
          answer:
            "Most patients see noticeable improvement within 7–14 days of intensive Ayurvedic therapy.",
        },
        {
          question: "Is Greeva Vasti safe for all neck conditions?",
          answer:
            "Greeva Vasti is generally safe but is customised based on individual diagnosis by our experienced physicians.",
        },
        {
          question:
            "What lifestyle changes support Ayurvedic neck treatment?",
          answer:
            "Ergonomic adjustments, stress management, yoga, and dietary changes aligned with your dosha type support treatment outcomes.",
        },
      ],
    },

    yogaDiet: {
      heading: "Yoga And Diet",

      image: "/images/yoga-diet.webp",

      description:
        "Simple techniques like moving neck to the front, back and sidewise, rotating shoulders in both clockwise and anticlockwise directions may help to reduce neck pain. Yogasanas like bhujangasana, matsyasana, etc can be practiced with the help of a yoga trainer. Diet includes light food with proper nutrition. Milk is good for bone health. Ghee helps for avoiding degeneration. Leafy vegetables to keep away from constipation and indigestion. Meat soup and fish for muscular tone and maintaining bony density. Ayurveda provides complete care for cervical spondylosis.",

      tips: [
        "Avoid lifting heavy weights and straining the neck",

        "Take breaks in-between work to give rest to the neck",

        "Adequate water intake should be maintained",

        "Weight gaining should be avoided",

        "Regular exercises"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLUG: arthritis-treatment
  // ─────────────────────────────────────────────────────────────────────────
  "arthritis-treatment": {
    hero: {
      title: "Ayurvedic Treatment For Arthritis in Kerala",
      description:
        "SreeRudra Ayurveda Multispecialty Hospital in Alappuzha, Kerala specialises in holistic Ayurvedic management of arthritis. Our time-tested Panchakarma therapies and personalised herbal protocols work to reduce inflammation, restore joint mobility, and prevent further degeneration — all without the side effects of long-term conventional medication.",
      image: "/images/spine.jpg",
      imageAlt: "Arthritis Treatment Kerala",
    },

    headparabut1: {
      heading: "Rheumatoid Arthritis and Its Ayurvedic Treatment in Kerala",
      description:
        "Rheumatoid arthritis can cause generalised inflammation in the lungs, pericardium (heart membrane), pleura (lung membranes), and sclera (eye white), as well as nodular lesions, which are most frequent in subcutaneous tissue. Autoimmunity plays a key role in the chronicity and progression of rheumatoid arthritis, even though the source is unknown. Chronic inflammation in rheumatoid arthritis patients causes cartilage, bone, and ligament damage, resulting in joint deformity. Joint damage can develop early in the disease and worsen with time. Furthermore, studies have revealed that the degree of pain, stiffness, or swelling in the joints does not always correlate with the progression of joint degeneration.",
      description2:"Most people with RA have flares, which are instances of high disease activity. In some patients, the condition is always present and worsens with time. Others have long periods of remission, with no signs or symptoms of the condition. Rheumatoid arthritis symptoms and progression differ from person to person and might change daily. Rheumatoid arthritis affects about 1% of the world’s population, with women three times more likely than males to be affected. The disease affects people of all ethnic groups and from all corners of the globe. It most commonly affects persons between 30 and 50, but it can also affect children, teenagers, and the elderly. Juvenile rheumatoid arthritis is a condition that affects children and teenagers. The Ayurveda Treatment for arthritis in Kerala is well known for its success rates."
    },
    headparabut2:{
      heading:"Diagnosis",
      description:"No test can conclusively determine whether or not you have RA. Most RA patients will have some aberrant test findings; however, others will have normal results on all tests."

    },

    headparabut3:{
      heading:"Cervical Spondylosis",
      description:"It is the condition that occurs when the bone and cartilages undergo wear and tear. The causes of this condition involve bone spurs, dehydrated spinal disk, herniated disks, injury, etc. The risk factors include neck injuries, work-related activities, holding the neck in an uncomfortable position for longer periods, genetics, smoking, etc. The pain might increase while standing, sitting, sneezing, coughing, etc."

    },

    Symptoms3box: {
  cards: [
    {
      title: "Overview",

      description:
        "Cervical spondylosis is a degenerative condition affecting the cervical spine and intervertebral discs. It commonly causes neck pain, stiffness, reduced flexibility and discomfort during movement. Early care and lifestyle management can help reduce progression and improve quality of life."
    },

    {
      title: "Neurological Symptoms",

      points: [
        "Numbness or tingling sensation in hands",
        "Weakness in upper limbs",
        "Frequent headaches and dizziness",
        "Reduced grip strength in fingers"
      ]
    },

    {
      title: "Lifestyle Difficulties",

      points: [
        "Difficulty sitting for long hours",
        "Pain during sudden neck movements",
        "Discomfort while sleeping",
        "Reduced flexibility during daily activities"
      ]
    }
  ]
},
    Joint2box: {
      heading: "Haircare & Ayurvedic Cosmetic Treatments",
      leftItems: [
        "Hair Oil Massage (Shiro Abhyanga)",
        "Herbal Hair Packs",
        "Scalp Treatments",
        "Hair Growth Therapy",
        "Dandruff Control",
        "Hair Strengthening",
        "Anti-Hair Fall Treatments",
        "Natural Hair Coloring"
      ],
      rightItems: [
        "Facial Rejuvenation",
        "Anti-Aging Masks",
        "Skin Brightening",
        "Acne Treatment",
        "Pimple Care",
        "Tan Removal",
        "Body Polishing",
        "Herbal Scrubs"
      ]
    },
    tabsorange: {
        heading: "Ayurvedic Treatment Modalities",

        description:
          "Ayurvedic therapies help in reducing pain, improving mobility and nourishing cervical structures naturally through external and internal treatment methods.",

        items: [
          {
            title: "ABHYANGA",

            span: "Medicated oil massage therapy"
          },

          {
            title: "NASYA",

            span: "Nasal administration of herbal oils"
          },

          {
            title: "GREEVA VASTHI",

            span: "Oil pooling treatment for neck region"
          },

          {
            title: "PIZHICHIL",

            span: "Warm oil streaming rejuvenation therapy"
          },

          {
            title: "NJAVARA KIZHI",

            span: "Rice bundle fomentation therapy"
          },

          {
            title: "PATRA PINDA SWEDA",

            span: "Herbal leaf poultice sudation"
          },

          {
            title: "SHIRODHARA",

            span: "Continuous oil pouring over forehead"
          },

          {
            title: "DHANYAMLA DHARA",

            span: "Warm herbal liquid streaming therapy"
          }
        ]
      },

      joint4box: {
        leftTop: {
          title: "Prognosis Of Disease",

          description:
            "Early-onset disease with a dominant dosha in a young person can be treated with proper therapy and adherence to Ayurvedic lifestyle recommendations. Chronic conditions affecting multiple systems may require long-term management and special care."
        },

        leftBottom: {
          title:
            "The Modalities Of Treatments For Amavata (Rheumatoid Arthritis) In Ayurveda Are As Follows",

          points: [
            "Shodhana – Panchakarma therapy used for detoxification and balancing doshas.",

            "Shamana chikitsa with Kashaya, Asava, Arishta, Choorna and Taila preparations.",

            "Langhana (fasting) using green gram, barley or rice soup based diet.",

            "Sodhana chikitsa is also known as purification therapy.",

            "Langhanam is referred to as controlled fasting."
          ]
        },

        rightTop: {
          title:
            "Two Lab Tests That Are Frequently Used To Aid In The Diagnosis",

          description:
            "Ayurveda explains disease through the imbalance of Vata, Pitta and Kapha doshas. Diagnosis focuses on identifying dosha imbalance, digestion issues and toxin accumulation affecting joints and tissues."
        },

        rightBottom: {
          title:
            "In This Diet, You Can Eat The Following Foods",

          points: [
            "Lentils, dal, mung beans, miso and tofu are beneficial legumes.",

            "Drink lukewarm water or ginger boiled water to improve digestion.",

            "Ginger, turmeric and garlic support anti-inflammatory response.",

            "Mild amounts of lean meat may be consumed when advised.",

            "Green leafy vegetables are highly recommended.",

            "Buttermilk may support digestion and gut balance."
          ]
        }
      },

    faqs: {
      heading: "Frequently asked questions",
      image: "/images/faq.png",
      items: [
        {
          question: "Can Ayurveda cure arthritis permanently?",
          answer:
            "Ayurveda can manage arthritis very effectively by reducing pain, inflammation, and slowing degeneration. Long-term remission is achievable with consistent treatment and lifestyle adherence.",
        },
        {
          question:
            "What is the Ayurvedic understanding of rheumatoid arthritis?",
          answer:
            "In Ayurveda, rheumatoid arthritis is called 'Amavata' — caused by the accumulation of Ama (undigested toxins) combined with aggravated Vata dosha in the joints.",
        },
        {
          question: "How long is a typical arthritis treatment programme?",
          answer:
            "An initial intensive course is typically 21–28 days, followed by maintenance therapies every 3–6 months depending on the severity.",
        },
        {
          question:
            "Are Ayurvedic arthritis treatments safe alongside conventional medication?",
          answer:
            "Yes, our physicians will review your current medications and design a complementary Ayurvedic plan that is safe and effective alongside conventional treatment.",
        },
        {
          question: "Which joints are most commonly treated?",
          answer:
            "We treat arthritis in knees, hips, fingers, wrists, spine, ankles, and shoulders with specialised therapies tailored to each joint.",
        },
      ],
    },
  },

  "kidney-disorder": {
    hero: {
      title: "Ayurvedic Treatment For Kidney Problems in Kerala",
      description:
        "SreeRudra Ayurveda Multispecialty Hospital in Alappuzha, Kerala specializes in holistic Ayurvedic management of kidney disorders. Our time-tested therapies and personalised herbal protocols work to restore kidney function and improve quality of life.",
      image: "/images/kidney1.png",
      imageAlt: "Kidney Treatment",
    },
    risks: {
      heading: "The Risks You Can't Ignore",
      items: [
        { text: "Diabetes", img: "/images/age.png" },
        { text: "High Blood Pressure", img: "/images/weight.png" },
        { text: "Family History", img: "/images/physic.png" },
        { text: "Heart Disease", img: "/images/yoga.png" },
        { text: "Smoking", img: "/images/smoke.png" },
        { text: "Obesity", img: "/images/exercise.png" },
      ],
      videoSection: {
        heading: "Treatments explained by a doctor",
        subtext:
          "Understand the procedure and benefits directly from our medical experts.",
        image: "/images/doctor.png",
      },
    },
    causes: {
      heading: "Main Causes of Kidney Disease",
      items: [
        {
          icon: "Activity",
          title: "Diabetes",
          description: "High blood sugar can damage the blood vessels in your kidneys over time.",
        },
        {
          icon: "TrendingUp",
          title: "High Blood Pressure",
          description: "Uncontrolled hypertension can lead to kidney failure by damaging arteries.",
        },
        {
          icon: "Activity",
          title: "Glomerulonephritis",
          description: "Inflammation of the kidney's filtering units (glomeruli).",
        },
        {
          icon: "Droplets",
          title: "Polycystic Kidney Disease",
          description: "An inherited disorder where clusters of cysts develop in the kidneys.",
        },
      ],
    },
    headparabut1: {
      image: "/images/kidney_detail.png",
      heading: "Ayurvedic Treatment For Kidney Disease In Kerala",
      description:
        "Ayurveda offers a unique approach to kidney health by focusing on balancing the doshas and rejuvenating the renal tissues. Our treatments include internal medications, detox therapies, and specific dietary regimens tailored to the stage of kidney disease.",
    },
    headparabut3: {
      heading: "Outcomes Of Kidney Disease",
      description: "Effective Ayurvedic management can lead to significant improvements in kidney function markers, reduced dependency on dialysis in some cases, and overall better health and vitality. Our patients often report improved energy levels and a reduction in systemic symptoms.",
      cta: "Consult with our specialists"
    },
    diagnosis: {
      heading: "Diagnosis & Treatment Procedures",
      leftCard: {
        title: "Tests Conducted for Detection",
        items: [
          {
            title: "Urine Protein Test",
            desc: "This test measures the amount of protein in your urine. Healthy kidneys remove protein from urine, but damaged kidneys may allow protein to leak into the urine, indicating the start of kidney disease."
          },
          {
            title: "Blood Creatinine Test",
            desc: "This test measures the level of creatinine in your blood. High creatinine levels indicate kidney damage. The glomerular filtration rate (GFR) can be calculated using these levels."
          },
          {
            title: "Imaging Tests",
            desc: "Ultrasound or Computed Tomography (CT) scans create pictures of the kidneys and urinary tract to detect any physical abnormalities like tumors or stones."
          },
          {
            title: "Kidney Biopsy",
            desc: "In some cases, a small sample of kidney tissue is removed and examined under a microscope to determine the specific cause of the kidney problem."
          }
        ]
      },
      rightCard: {
        title: "Some Procedures Involved In The Treatment",
        items: [
          {
            title: "Doshahara Lepa and Dhara",
            desc: "Treatments administered locally or whole-body using suitable medicaments to reduce swelling, pain, and discoloration."
          },
          {
            title: "Kledasoshana Massage",
            desc: "A full-body massage performed using poultices made from dry powdered drugs for therapeutic purposes."
          },
          {
            title: "Vrikaroga Special Diet",
            desc: "A balanced pathya diet avoiding oily/spicy foods and maintaining electrolyte balance (Sodium, Potassium, Calcium)."
          },
          {
            title: "Vrikarogaharavihara",
            desc: "Lifestyle modifications including avoiding excessive sweating, strenuous exercise, and physical exertion during treatment."
          }
        ]
      }
    },
    headparabut4: {
      heading: "Final Outcomes",
      description: "Our goal is to provide a holistic recovery path that addresses both the physical symptoms and the root cause of the disorder. With consistent therapy and lifestyle changes, long-term kidney health is achievable.",
      cta: "Consult with our specialists"
    },
    faqs: {
      heading: "Frequently asked questions",
      image: "/images/faq.png",
      items: [
        {
          question: "Can Ayurveda help in chronic kidney disease (CKD)?",
          answer: "Yes, Ayurveda can help manage CKD by slowing progression and improving kidney function markers."
        },
        {
          question: "Is there any specific diet for kidney patients?",
          answer: "Yes, a low-sodium, low-protein, and controlled potassium/phosphorus diet is usually recommended."
        }
      ],
    },
    ourTreatments: {
      heading: "Our Treatment",
      tabs: ["Lifestyle", "Pain & Ortho", "Neuro", "Women & Wellness", "Specialized Care"],
      cards: [
        { title: "Kidney Care", img: "treatment1.png" },
        { title: "Lung Disorders", img: "treatment2.png" },
        { title: "Liver Cirrhosis", img: "treatment3.png" },
        { title: "Spinal Problem", img: "treatment4.png" },
        { title: "Mental Disorder", img: "treatment1.png" },
        { title: "Mental Disorder", img: "treatment1.png" },
      ],
    },
  },

  "rectal-problems": {
    hero: {
      title: "Ayurvedic Treatment For Piles Problems in Kerala",
      description:
        "Ano-rectal problems can affect persons of all ages, ranging from newborns to the elderly. The most frequent anorectal problems are piles, fissures, and fistulas. Piles is characterized by bleeding or prolapsing of the rectum during defecation. Fissures are tears in the anal tract that occur when hard stool is passed.A fistula is a pus-filled cavity in the anal system. Digestion is a primary problem in all anorectal illnesses, as is sluggish digestion. Excessive sexual activity, physical strain, eating non-vegetarian foods, and drinking alcohol are common causes of rectal problems. With individualized medicines, nutrition, and lifestyle recommendations, Ayurveda treatment for piles in Sree Rudra produces positive effects.",
      image: "/images/piles1.jpg",
      imageAlt: "Rectal Treatment",
    },
    conditions: {
      heading: "Anorectal Conditions",
      items: ["Piles", "Fistula", "Fissure", "Abscess"],
    },
    headparabut1: {
      heading: "Medication, Also Known As Bhaishajya Chikitsa",
      description: "The majority of small hemorrhoids can be treated solely with medicine. There are no more operations necessary unless the haemorrhoids are severe. In the worst-case scenario, drugs may be employed alongside surgeries. Your dosha will influence the pharmaceutical solutions that your Ayurvedic practitioner prescribes and any dietary or lifestyle adjustments they recommend to prevent a recurrence. Some medications may not be appropriate for your dosha, so listen to your doctor’s advice.",
    },
    hideFaqs: true,
    hideTabs: true,
    headparabut2: {
      heading: "Kshara Or Herbal Application",
      description: "Kshara is an alkaline, caustic paste that is used to treat hemorrhoids. The paste has a cauterizing effect and is made of a herbal blend. Specialized equipment called a slit proctoscope is used to apply Kshara to hemorrhoids. The material then cauterizes hemorrhoids, which may have been open and bleeding. This Kshara karma method is regarded as the greatest approach for treating hemorrhoids in Ayurvedic medicine. Depending on your dosha, you’ll be instructed to take specific medications to balance your body as you recuperate. You may need to make dietary or lifestyle adjustments to help your body recuperate.",
    },
    symptoms: {
      heading: "Symptoms of Piles",
      cards: [
        {
          image: "/images/piles2.jpg",
          title: "Ayurvedic Treatment For Piles (Hemorrhoid)",
          description: "The premise that there are three doshas, or body types: pitta, vata, and kapha, is a basic tenet of Ayurvedic treatment. Each dosha corresponds to a particular element — fire (pitta), air (vata), and water (kapha) — and a person who has one dominant dosha will exhibit physical or emotional qualities that correspond to that element. In Ayurveda, the ultimate goal is to achieve dosha balance. Diet, lifestyle changes, and natural therapies are used to accomplish this."
        },
        {
          image: "/images/piles3.jpg",
          title: "Swollen Veins In The Anus And Rectum Are Known As Hemorrhoids. They Can Be Internal Or Exterior",
          list: [
            "A lot of itchiness around the anus",
            "Swelling or lump around your anus that is uncomfortable or irritating",
            "Bowel movements that hurt",
            "Your anus may bleed during or after bowel motions.",
            "Itchiness and pain in the area of the anus",
            "Involuntary stool leakage."
          ]
        }
      ]
    },
    interventions: {
      heading: "Surgical Intervention",
      description: "Kshara sutra is an Ayurvedic therapy that your Ayurvedic practitioner may recommend. The Kshara Sutra utilizes a specific medicated thread to knot hemorrhoids off at the base. The blood flow to the vein is cut off, which allows hemorrhoids to decrease over the next 7 to 10 days. On its own, it will wilt and detach. Only after other therapies have failed will this more invasive method be tried. Your Ayurvedic practitioner will take your dosha into account when it comes to treatment. For example, you may require certain herbs to aid with postoperative recovery. To avoid future hemorrhoids, you may need to make lasting adjustments to your diet, activity, and other factors.\n\nEven though this technique is considered less invasive, it is not without danger. Surgical intervention could be risky for patients prone to infection, have a bleeding issue, or are using heart or blood-thinning drugs. Seek advice from a qualified healthcare provider",
      image: "/images/piles1.jpg",
      bottomCards: [
        {
          title: "Cauterization, Also Known As Agni Karma",
          description: "Infrared heat can be used to sear external hemorrhoids. Your Ayurvedic practitioner may recommend that you burn the hemorrhoids. Cauterization will cause discomfort. This type of therapy may require five to six treatments spread out over the same number of weeks before showing results. Your dosha will be considered once more before therapy. This surgery has the potential to cause more discomfort or infection. Please consult your doctor about strategies to lower your risks and ensure it's right for you.",
          image: "/images/cause1.png"
        },
        {
          title: "Ayurvedic Treatment For Anal Fissure",
          description: "Cauterization, Also Known As Agni Karma. Infrared heat can be used to sear external hemorrhoids. Your Ayurvedic practitioner may recommend that you burn the hemorrhoids. Cauterization will cause discomfort. This type of therapy may require five to six treatments spread out over the same number of weeks before showing results. Your dosha will be considered once more before therapy. This surgery has the potential to cause more discomfort or infection. Please consult your doctor about strategies to lower your risks and ensure it's right for you.",
          image: "/images/cause2.png"
        }
      ]
    },
    medicines: {
      items: [
        {
          title: "Oil Of Jatyadi",
          description: "It acts as an antibacterial, antimicrobial, antipruritic, and wound healing booster, reducing itching, burning, and irritation around the anal region. It also aids in the healing of tears produced by firm stools passing."
        },
        {
          title: "Yashtimadhu Churna",
          description: "This anti-inflammatory and analgesic substance is also known as mulethi. This works as an antacid as well. It relieves the burning sensation while also hastening the healing of fissures."
        },
        {
          title: "Rasayana Of Gandhak",
          description: "It is used to treat many infections due to its antibacterial, antiviral, and antimicrobial characteristics. These also have anti-inflammatory qualities, which aid in reducing anal edema."
        },
        {
          title: "Triphala Guggulu",
          description: "Because of its analgesic and anti-constipation properties, Triphala Guggulu is used to treat anal fissures, constipation, as well as the pain caused by fissures. Apart from that, the medicine softens faeces and protects the body from infection. If you have persistent constipation, Gulkand or Triphala Churna can be used instead of Triphala Guggulu."
        }
      ]
    },
    faqs: {
      heading: "Frequently Asked Questions",
      image: "/images/faq.png",
      items: [
        {
          question: "Is Ayurvedic treatment effective for chronic piles?",
          answer: "Yes, Ayurveda offers highly effective treatments for chronic piles through medication (Bhaishajya Chikitsa), lifestyle changes, and procedures like Kshara Karma and Kshara Sutra, which help in complete recovery and prevent recurrence."
        },
        {
          question: "How long does Kshara Sutra therapy take for fistula?",
          answer: "The duration of Kshara Sutra therapy depends on the length and depth of the fistula track. Generally, the thread is changed weekly, and the track heals at a rate of approximately 1 cm per week."
        },
        {
          question: "Are there any dietary restrictions during rectal treatment?",
          answer: "Yes, diet plays a crucial role. Patients are advised to eat fiber-rich foods, stay hydrated, and avoid spicy, oily, and heavy-to-digest non-vegetarian foods to maintain soft stools and easy bowel movements."
        },
        {
          question: "Can piles recur after Ayurvedic treatment?",
          answer: "Ayurvedic treatments like Kshara Sutra have a very low recurrence rate (less than 1%). However, maintaining a healthy diet and preventing constipation are essential to ensure long-term results."
        },
        {
          question: "Is the Ayurvedic procedure for piles painful?",
          answer: "Procedures like Kshara Karma are minimally invasive and performed under local anesthesia if necessary. Most patients experience minimal discomfort and can return to their daily routine much faster than conventional surgery."
        }
      ]
    }
  },

  "liver-cirrhosis": {
    hero: {
      title: "Ayurvedic Treatment for Liver Cirrhosis In Kerala",
      description:
        "Cirrhosis of the liver is the final stage of many chronic liver disorders. It comprises two phases: compensatory and decompensatory. The compensated phase lasts a long time. Major consequences of decompensated cirrhosis include jaundice, variceal bleeding, ascites, and encephalopathy. The most prevalent symptom is ascites. In 10 years, 50% of compensated cirrhosis patients develop ascites. Treatment for ascites necessitates hospitalization, can result in life-threatening complications and necessitates liver replacement. The advent of ascites signals a worsening prognosis and an increase in mortality. Cirrhosis fatalities 15% of people within the first year after diagnosis, and 40% die within the first 60 months. The death rate after ten years is 34–66 percent. Cirrhosis is caused by alcohol intake, viral hepatitis B and C, and metabolic syndrome linked to obesity. Cirrhosis of the liver is responsible for 1,70,000 deaths in Europe each year. The prevalence of liver illnesses is rising, and a significant increase in the burden of liver disease is projected. Liver cirrhosis’s annual healthcare costs in the United States range from $12 billion to $23 billion.",
      image: "/images/liver1.png",
      imageAlt: "Liver Cirrhosis Treatment",
    },
    headparabut1: {
      heading: "Ayurveda Management For Liver Cirrhosis",
      description:
        "Ascites are associated with Jalodara in Ayurveda. Jalodara stage is reached by all Udara disorders (morbid abdominal disorder). The major goals of the Ayurvedic management plan are to improve Jatharagni (metabolism) and stimulate hepatic function. Nitya virechana, teekshna (strong, piercing) medications, kshara (alkali), gomutra (Cow’s urine), fluid restriction, milk, buttermilk, diet, oral medicaments, and rasayana (rejuvenative) drugs are some of the treatments used in Jalodara (C.Chi.13). Preoperative therapies such as snehapana (internal oleation therapy) and swedana (sudation therapy) are not performed in the Nitya virechana procedure. Virechana is performed with a lower level of intensity and more frequently. However, evidence of Ayurveda treatment of liver cirrhosis with ascites is limited.",
    },
    headparabut2: {
      heading: "Causes Of Liver Cirrhosis",
      description:
        "Several factors can cause cirrhosis. Alcoholism, hepatitis B and C, and fatty liver disease are the most prevalent causes of cirrhosis, but various other factors can also cause them. A disorder that has no known cause is referred to as idiopathic.Cirrhosis is increasingly caused by obesity, either alone or in combination with alcohol, hepatitis C, or both. Cirrhosis affects many patients who have many causes of liver disease. Cirrhosis is not caused by hepatic trauma or other acute or short-term damage to the liver. Cirrhosis is usually caused by years of persistent damage.Chronic hepatitis C – Hepatitis C is a liver infection conveyed via contact with an infected person’s blood. Cirrhosis can develop due to chronic hepatitis C, which causes inflammation and damage to the liver over time.Hepatitis B and D (chronic hepatitis B and D) — Hepatitis B is a liver infection transferred through contact with an infected person’s blood, sperm, or other bodily fluids. Hepatitis B, like hepatitis C, produces inflammation and injury in the liver, resulting in cirrhosis.Autoimmune hepatitis is a kind of hepatitis in which the body’s immune system attacks liver cells, resulting in inflammation, damage, and cirrhosis. Genetic factors, according to researchers, may make some people more susceptible to autoimmune illnesses. Approximately 70% of people with autoimmune hepatitis are women. Inherited diseases – Cystic fibrosis, alpha-1 antitrypsin deficiency, hemochromatosis, Wilson disease, galactosemia, and glycogen storage diseases- affect the liver’s ability to produce and process and store enzymes, proteins, metals, and other substances required for proper body function. These disorders can lead to cirrhosis. Infections, poisons, and drugs – Drug reactions, long-term exposure to harmful chemicals, parasite infections, and repeated bouts of heart failure with liver congestion are all possible causes of cirrhosis",
    },
        headparabut3: {
      heading: "Ayurveda and Liver Cirrhosis",
      description:
        "The liver is referred to as Yakrit in Ayurveda. The liver’s major humor is pitta. Pitta conditions exacerbate the majority of liver problems. High pitta is frequently indicated by excessive bile production or a blockage in the flow of bile, which impairs the agni or enzyme activity responsible for absorption, digestion, and metabolism. In Ayurveda, cirrhosis of the liver is described as Kumbha Kamala. It is a neglected or untreated stage of jaundice or hepatitis that, when it becomes chronic, causes the liver to become dry or rough (kharathva or rookshatva). If not treated right away, it can become incurable. We provide highly efficient therapy for Liver Cirrhosis at Sreerudra Ayurveda. Shodana chikitsa (detoxification using Panchakarma procedures), Shamana chikitsa (Palliative studied Ayurvedic medications), and Kayakalpa are all part of our treatment (rejuvenation). Our treatment helps improve the liver’s health and avoid additional damage. Dietary restrictions, lifestyle changes, and de-addiction are important aspects to consider for the best results.                  ",
    },
    singlebox: {
       heading: "Symptoms Of Liver Cirrhosis",

      leftItems: [
        "Swelling in the ankles, legs, and abdomen due to fluid retention (edoema) (often an early sign)",
        "Confusion, disorientation, and personality shifts are all common symptoms",
        "Fatigue (a lack of energy that can be debilitating)",
        "Urine with a brownish or orange tint",
        "Stool with blood in it",
        "Appetite Loss",
        "Fever"
      ],

      rightItems: [
        "Whether you’re losing weight or gaining weight, it’s important to keep track",
        "Skin or eye whites that have become yellow (jaundice)",
        "On the skin, there are spider-like blood veins.",
        "bloating and abdominal pain",
        "Vomiting and Nausea",
        "Stools in light colors",
        "Itchy skin"
      ]
    },

    faqs: {
      heading: "Frequently Asked Questions",
      image: "/images/faq.png",
      items: [
        {
          question: "Can Ayurveda help reverse liver cirrhosis?",
          answer:
            "Ayurvedic treatment focuses on managing symptoms, slowing progression, and supporting liver regeneration through therapies, nutrition, and lifestyle optimization.",
        },
        {
          question: "How long does liver treatment take?",
          answer:
            "The duration varies by individual and the severity of the condition, but many patients notice improvements within a few weeks of consistent treatment.",
        },
        {
          question: "Is the treatment safe for advanced liver disease?",
          answer:
            "Yes. Treatment plans are customized by an Ayurvedic physician to suit each patient’s current health and avoid undue stress on the liver.",
        },
        {
          question: "What role does diet play in Ayurvedic liver care?",
          answer:
            "Diet is central to liver healing, helping to reduce toxins, improve digestion, and support the effectiveness of therapies.",
        },
      ],
    },
  },

  "varicose-vein": {
    hero: {
      title: "Ayurvedic Treatment For Varicose Vein In Kerala",
      description: "The term ‘varicose’ refers to a dilated or swollen vein. Varicose veins are caused by a backflow of blood in the veins, causing them to become excessively bloated, twisted, and dilated. The veins of the legs are usually affected by varicose veins.Veins are the blood channels that convey deoxygenated blood from the legs to the heart. Valves are structures that prevent blood from flowing backward. These valves become weak due to vigorous activities requiring prolonged standing, weight carrying, or long-distance walking, leading blood flow to reverse direction, producing swelling and dilatation in the veins. Varicosity in veins can be caused by various factors, including obesity, diabetes, pregnancy, and hypertension. The Varicose vein treatment in ayurveda of Kerala is popular due to its success rates.",
      image: "/images/varicose1.jpg",
      imageAlt: "Varicose Vein",
    },
    headparabut1: {
      heading: "Varicose Vein",
      description: "Varicose veins are twisted, enlarged veins. Any vein close to the surface of the skin (superficial) can become a varicose vein. Varicose veins most commonly affect the veins in the legs.",
    },
    risks: {
      heading: "The Risks You Can't Ignore",
      items: [
        { text: "Diabetes", img: "/images/age.png" },
        { text: "High Blood Pressure", img: "/images/weight.png" },
        { text: "Family History", img: "/images/physic.png" },
        { text: "Heart Disease", img: "/images/yoga.png" },
        { text: "Smoking", img: "/images/smoke.png" },
        { text: "Obesity", img: "/images/exercise.png" },
      ],
      videoSection: {
        heading: "Treatments explained by a doctor",
        subtext:
          "Understand the procedure and benefits directly from our medical experts.",
        image: "/images/doctor.png",
      },
    },
    headparabut2: {
      heading: "Panchakarma Therapies For Varicose Vein",
      description: "Ayurvedic treatments for varicose veins include Shamana chikitsa (with medications) and Shodhana chikitsa with Panchakarma therapies. Panchakarma methods such as Basti (Bowel cleaning), Raktamokshana (Leech therapy), and Siravyadha (Bloodletting) are quite beneficial. Internal medications such as Kaishora Guggulu and Triphala Guggulu are popular. Eranda, Guduchi, and Punarnva are herbs that decrease inflammation and improve blood flow. Other plants used for blood cleansing include Sariva, Manjista, and Mandookaparni. Kashayas produced from these plants are quite helpful in this situation. The doshas can be balanced with Triphala churna, which will assist relieve the strain on the afflicted veins.",
      description2: "The vata dosha is regarded to be the most powerful in ayurvedic philosophy. It regulates your thoughts, breathing, blood flow, heartbeat, and digestion. Vata may be disrupted by staying up late, fear, grief, and eating too soon after a meal, resulting in anxiety, asthma, heart disease, rheumatoid arthritis, and skin issues. Vata has the largest impact on varicose veins, according to ayurvedic medicine. Plants, animal byproducts, minerals, and metals are among the ingredients of Ayurvedic treatments. Abhyanga is the name of the massage technique it uses. Warm herb-infused oil is used to calm the body during an abhyanga session. Gotu kola, a herb cultivated in India, Southeast Asia, and Africa, is one ayurvedic treatment that claims to cure varicose veins. It comes in a tea, pill, or tincture and is comparable to parsley. Gotu kola is supposed to strengthen vein walls by boosting collagen and elastin production, beneficial for varicose veins.Leeches applied to the skin around varicose veins are examples of ayurvedic therapy. Leeches create a chemical that thins the blood, promoting healthy blood flow.Ayurveda is one of the best methods to treat Varicose Vein from the deep root.",
    },
    therapies: {
      heading: "Some Of The Ayurvedic Treatments For Varicose Veins",
      items: [
        {
          title: "Sariva",
          description: "Sariva roots are rich in plant components with Varnya (beauty-boosting) and Dahaprashamana (burn-relieving) properties. The root extracts are powdered and used topically to regions of skin affected by varicose veins with painful symptoms such as itching, dryness, and dark patches to relieve irritation and level skin tone. A tonic prepared from pulverized Sariva roots is also used, since it has strong blood-purifying properties that help flush out Ama toxins and regulate circulation."
        },
        {
          title: "Manjistha",
          description: "Manjistha contains anti-inflammatory qualities that help to reduce swelling and discomfort in varicose veins in the lower legs. Apart from purifying the blood of impurities and boosting circulation in wounded veins and blood vessels, this plant effectively balances the vitiated pitta dosha. Manjistha powder combined with aloe vera gel can be used on the skin to remove spots and blemishes. The dried powder mixture of manjistha’s stem and root is a tried-and-true therapy for persistent varicose veins."
        },
        {
          title: "Gotu Kola",
          description: "Gotu kola efficiently removes plaque and hardening from blood vessels, promoting smooth circulation and maintaining normal blood pressure. It is rich in iron, a crucial trace mineral for healthy red blood cell formation and transit in the system. In addition, the abundant levels of triterpenoid antioxidants in Gotu kola leaf juice assist resolve blood vessel damage and reinforce internal structures of veins; therefore, drinking a herbal combination of Gotu kola leaf juice works wonders in enhancing collagen elastic creation."
        },
        {
          title: "Eranda",
          description: "he abundance of bioactive ricin-based chemicals in the tincture made from Eranda beans – castor oil are recognized for their incredible ability to decrease inflammation and calm blood clots in varicose veins-affected lower legs. Warming some castor oil and gently pressing it into the areas of skin with varicose veins in circular motions is a tried-and-true herbal remedy for improving blood circulation and removing dark spots."
        },
        {
          title: "Chirabilva",
          description: "Chilrabilva is rich in Pitta Shamaka, or pitta-balancing properties, and kapha and vata-modifying properties to promote optimal tridosha balance in the system. This adaptable plant is used as a bark decoction to dissolve blood clots in the lower legs and is promoted as a natural blood purifier. It’s also used topically to treat varicose veins by applying a paste produced from bark extracts to the afflicted areas of the skin"
        }
      ]
    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },
  },


  "rejuvenation": {
    hero: {
      title: "Rejuvenation Therapy",
      description:
        "There is nothing ayurveda could offer you. From minor disease treatments to entire body rejuvenation, ayurveda has everything in it to keep your wellbeing. Rasayana Chikitsa (Rejuvanation Therapy is mentioned as Rasayana Chikitsa in ayurvedic books), is one of its kind ayurvedic ways to rejuvenate body and mind. Rasayana literally means nutrition at macro and micro cellular level. Ayurvedic texts define Rasayana as one which destroys old age and diseases. Rasayana or Rejuvenation therapy replenishes body tissue cells and its enzymes and make sure its longevity. In effect it will help in improving the normal functioning of the immune system, keeping serenity of mind and soothing of nerves and bones. As a part of rejuvenation therapy, special face and body messages are available using specially made herbal oils and creams. Taking Rasayana Chikitsa will definitely help you in boost the Ojas (primary vitality) and Sattva (mental clarity). Rasayana Chikitsa includes Kayakalpa, Sweda Karma, Yoga and panchakarma.       ",
      image: "/images/rejuvenation1.png",
      imageAlt: "Rejuvenation Therapy",
    },
    heroMirror: {
      title: "Kutipravesika and Vatatapika",
      
      description:
        "There is nothing ayurveda could offer you. From minor disease treatments to entire body rejuvenation, ayurveda has everything in it to keep your wellbeing. Rasayana Chikitsa (Rejuvanation Therapy is mentioned as Rasayana Chikitsa in ayurvedic books), is one of its kind ayurvedic ways to rejuvenate body and mind. Rasayana literally means nutrition at macro and micro cellular level. Ayurvedic texts define Rasayana as one which destroys old age and diseases. Rasayana or Rejuvenation therapy replenishes body tissue cells and its enzymes and make sure its longevity. In effect it will help in improving the normal functioning of the immune system, keeping serenity of mind and soothing of nerves and bones. As a part of rejuvenation therapy, special face and body messages are available using specially made herbal oils and creams. Taking Rasayana Chikitsa will definitely help you in boost the Ojas (primary vitality) and Sattva (mental clarity). Rasayana Chikitsa includes Kayakalpa, Sweda Karma, Yoga and panchakarma.       ",

      image: "/images/rejuvenation2.png",

      imageAlt: "Ayurvedic wellness treatment"
    },
        faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },
  },
  "ayurvedic-cosmetology": {
    hero: {
      title: "Ayurvedic Treatment For Ayurvedic Cosmetology In Kerala",
      description:
        "SreeRudra Ayurveda is the best cosmetology treatment center that offers traditional Ayurvedic methods to bring out the best in your skin and hair. Our goal is to help you achieve a beautiful, healthy, and youthful appearance. We believe that Ayurveda is the best way to achieve this goal. At SreeRudra Ayurveda, we offer a variety of treatments to help you get the best results.We offer both herbal and non-herbal treatments that are tailored to suit your individual skin and hair needs. Our treatments target the root cause of skin and hair problems, instead of simply treating the symptoms. Our treatments are aimed atnourishing and revitalizing your skin and hair, leaving you with a healthy, glowing complexion.",
      image: "/images/rejuvenation2.png",
      imageAlt: "Ayurvedic Cosmetology",
    },
    treatmentGroups: [
      {
        title: "Basic Skin And Hair Treatments",
        items: [
          "ABHYANGAM - Oil Massage",
          "UDVARTANAM",
          "SHIRODHARA",
          "NASYAM",
          "LEPAMS"
        ],
      },
      {
        title: "Herbal Beauty Treatments",
        subtitle: "Face Care (Kanthi)",
        items: [
          "Anti-Acne Treatments/Packs",
          "Melasma Treatment/Packs",
          "Bridal Treatment Packs",
          "Skin Glow Treatments",
          "Mukha Abhyangam",
          "Tan Care Treatments",
          "Fruit Packs/Facial",
          "Pimple Care Gels",
          "Adolescent Kit",
          "Mukhalepam",
        ],
      },
      {
        title: "Lipcare/Footcare/ Eyecare/Fullbody",
        items: [
          "Skin Tightening Treatment",
          "Tan Removal Treatment",
          "Skin Glow Treatment",
          "Body Polishing",
        ],
      },
    ],
    Joint2box: {
      heading: "Haircare & Ayurvedic Cosmetic Treatments",
      leftItems: [
        "Hair Oil Massage (Shiro Abhyanga)",
        "Herbal Hair Packs",
        "Scalp Treatments",
        "Hair Growth Therapy",
        "Dandruff Control",
        "Hair Strengthening",
        "Anti-Hair Fall Treatments",
        "Natural Hair Coloring"
      ],
      rightItems: [
        "Facial Rejuvenation",
        "Anti-Aging Masks",
        "Skin Brightening",
        "Acne Treatment",
        "Pimple Care",
        "Tan Removal",
        "Body Polishing",
        "Herbal Scrubs"
      ]
    },
    headparabut1: {

      description: "We specialize in Ayurveda cosmetology and have a team of expert ayurvedic practitioners to help you achieve your desired results. Our treatments include massages, detoxification, herbal medications, facial masks and other therapies that are designed to promote healthy skin and hair. We also offer diet advice and lifestyle modifications to complement our treatments.",
      description2:"At SreeRudra Ayurveda, we believe in using natural ingredients and methods to achieve the best results. Our treatments are safe, gentle and effective and will leave your skin and hair looking and feeling great. We use only the finest and purest herbal ingredients in our treatments, so you can be sure that you are getting the best quality treatment available.",
      description3:"At SreeRudra Ayurveda, we are committed to providing you with the highest quality of care and service. We strive to make sure that our clients are happy and satisfied with the results of our treatments. Our experienced and knowledgeable staff are always on hand to answer any questions you may have. Our goal is to help you achieve the best results with Ayurveda in cosmetology.",
      description4:"Ayurveda Cosmetology is an emerging branch focused not merely on external appearance, it’s rooted deep into one’s spiritual, mental, and physical equilibrium long with a balanced stage of tridosa (V, P, K), Satwa, Dinacharya, Rtucharya.",
      description5:"Ayurveda cosmetology aims to produce nutrition, care and cure to your skin and hair through chemical-free authentic formulations and procedures.",
      description6:"Step to our soundrya beauty concept through Ayurveda to get healthy glowing skin and hair. Nourish your body with the goodness of Ayurveda."
    },
    headparabut2: {
      heading: "India In The History Of Cosmetology With Ayurvedic Care And Treatments",
      description: "There are plenty of records from the past demonstrating how important beauty was. Different artworks, sculptures, and cave paintings all around the world bring this statement to life. Ancient sources of knowledge like the Veda, Purana, Ramayana, Mahabharata, Brihat Samhita, and Vatsyayana Kamsutra all have a substantial contribution to this. Evidence of the appreciation of beauty in those times can be seen in the artifacts found in Mahenjodaro and Harrapa culture, like ‘Shilajitu’, ‘Kajala’, and ‘Mirrors’. In the Rigveda, instructions for applying certain herbs to the body and in the Atharvaveda, mantras that emphasize the importance of enhancing the complexion, hair, and physical appearance of the body are found. According to the Garuda Purana, various means of improving beauty are described, as well as separate instructions for male and female body parts. The Ramayana and Mahabharata also offer extensive details regarding the beauty of important figures such as Ramchandra, Sita, Nakula, and Sahdeva. In the Anushasan Parva of the Mahabharata, it is indicated that to gain beauty and popularity, the Chandrayana Vrata should be observed during the Magasirsha Masa. Additionally, the description of Draupadi at the time of her Swayamvara and her role as a beautician further demonstrate the level of fashion sense which was present during that era.",
      description2:"Ayurvedic literature is also behind in this matter. Oriental medical practitioners have highlighted the importance of a good looking exterior for physicians, staff and patients. Terms like Sumukha, Sudarshana, Subhaga and others have been related to the types of Prakriti, Sara, Samhanana, Pramana and so on. Furthermore, the descriptions of Dinacharya and Ritucharya illustrate the concern for cosmetics in those times. The dietary habits and Pathya-Apathya are also significant aspects in boosting beauty. Ayurveda’s unique concepts like Vyayama, Abhyanga massage, and various kinds of Snana show how highly valued cosmetology was back then.",
      description3:"Additionally, the concept of Rasayana therapy particularly demonstrates the importance of keeping a youthful appearance. Ayurveda values beauty regardless of age or gender, but it is just as important to prioritize health in order to be considered beautiful. A healthy body and mind are essential in order to meet the standards of beauty.",
    },
    headparabut3: {
      description: "Maharshi Charaka divided various herbs into groups, such as Varnya, Keshya, and Vayasthapana, to increase a person’s beauty. Abhyanga, Snana, and Lepa are some of the hygienic activities in Sushruta Samhita that are believed to improve a person’s physical and mental well-being. The 22 Upkramas mentioned in Vaikritapaham, such as Alepana, Pariseka, Utsadana, Pandukarma, and Roma sanjanana, show that cosmetics had a major role in this document.Moreover, Sushruta was the first to develop cosmetic treatments such as Auroplasty and Rhinoplasty. ",
      description2: "In Astanga Samgraha and Astanga Hridaya, two groups of herbs are categorized as the Varnya group, namely Rodhradigana and Eladigana. Both of these ancient authors also describe Mukha Lepa, Mukha Lepa Varjya, and Samyak Prokta Mukha Lepa Laksana. Acharya Vagbhata’s ‘Astanga Hridaya’ outlines six different formulations of Mukha Lepa as per ‘Ritu Bheda’ (seasonal variations). During the Mughal Empire, the study of cosmetics was given more attention, as evidenced by references in texts like Sarangdhara, Bhavapraksha, and Yogaratnakara.",
    },
    headparabut4: {

      heading:"Cosmetology In Ayurveda",
      description: "Ayurveda’s concept of cosmetology is associated with the wellbeing of both the body and mind. The literature on cosmetology and healthy individuals in Ayurveda can be broadly divided into three sections:"

    },
    headparabut5: {

      heading:"Elements That Identify Beauty",

      description:"Of these, several factors are identified in Ayurveda that play a major role in deciding a person’s beauty, such as Prakriti, Sara, Samhanana, Varna, Prabha, Chhaya, Pramana of various Angavayavas, and Dirghayu Lakshanas that give the basic foundation and aesthetic sense of personality and beauty.",
      description2:"According to Ayurveda, Prakriti is an intrinsic factor that affects one’s beauty. Vagbhata has based different Prakrutis on the facial characteristics, especially of the eyes. The anatomy of organs such as the eyes, skin, teeth, and nails is given priority when discussing the eight sars. Maharshi Charaka has noted that the skin of the Tvaksara Purusha is lustrous, silky to the touch, soft, attractive, thin, and shiny. He also commented that a healthy individual, with evenly distributed muscles, ample power, and strength of the senses, will be resistant to illnesses. This underlines the importance of wellness in regard to a person’s personality.",
      description3:"According to Ayurvedic texts, the individual organs of a healthy person have been quantified in relation to Pramana Pariksha. In addition to the numerical analysis, the shape and outline of each organ is also seen to be described in the Ayurvedic texts. Kashyapa and Charaka discuss an individual’s personality and life span in connection to the different anatomical features such as hair, skin, head, ears, eyes, eyebrows, nose, mouth, lips, neck, chest hands, axilla, and so forth, based on their varying shapes and outlines.",
      description4:"In Ayurveda, the word “Varna” is utilized for both colour and complexion. To maintain or enhance the radiance of the skin, proper care must be observed, such as protecting it from excessive sunlight and frequent cleaning. Soft, healthy skin gives off a beaming complexion. The overall health of the skin is assessed through its texture, colour, tone, luster, and complexion. The complexion is the standard appearance of a person’s facial skin, specifically, it’s colour or quality. Texture pertains to the feel of an object, whether it is rough or smooth, soft or hard. Luster refers to the amount",
      description5:"of shine. According to Maharshi Charaka, four colours, namely Krishna, Shyama, Shyamavadata, and Avadata, are deemed normal for the body. Meanwhile, Nila, Shyama, Tamra, Harita, and Shukla are considered “Vikruta Varna” of the body. External factors like genetic factors (Desha, Kula, Jati), Shukra, and Ahara-Vihara, as well as internal factors like Mahabhoota, Dosha, and more, all have an influence on the complexion."

    },

    headparabut6: {
      heading:"Components Influencing Beauty", 
      description:"Ayurveda states that when the Dosha and Dhatu are in good health, it enhances one’s beauty. An even-keeled Agni, achieved by digestion and metabolism, produces vital substances such as Bala, Varna, Ojas, Dhi, Dhriti, and Smriti, which all play a role in creating beauty. Additionally, the combination of Matrijadi Shad Bhavas and Panchamahabhautic also contribute to an individual’s innate beauty. Age, sex, religion, race, and anthropology all have a considerable effect on one’s physical beauty. The excellence of all the dhatus is responsible for the maintenance of a person’s physical beauty. Eating the right food and having proper digestion results in the health of all the dhatus, which boosts the physical appearance. It is also essential to eliminate wastes for the person to receive nourishment and stay healthy and look attractive. Agni further contributes to the individual’s beauty as it has the ability to effectively digest food and make nutrients accessible to the tissues. It also helps to train the mind to be disciplined in order to attain inner beauty. The five elements together take part in the formation of organs during pregnancy and are also responsible for colouring the skin."
    },
    headparabut7: {
      heading:"Factors That Improve Beauty",
      description:"Ayurveda is well-known for its detailed descriptions of adjuvants, such as Dinacharya, Ritucharya, Achara Rasayana, and various internal medicines like Mahakashaya. The practice also includes surgical treatments, such as Plastic surgery and Vaikritapaham, as well as Hitatama, Matravat, and Sadapathya dravyas diets. Finally, Ayurveda offers medicinal options such as Rasayana, Ghrita, and Taila."
    },
    headparabut8: {
      heading:"Ayurveda In Cosmetology",
      description:"In social life, human beings have always admired and strived to maintain beauty since ancient times. Respect is gained through physical appearance, oratory ability, what one wears and wealth. This is a significant issue regarding both medicine and society that has been around for centuries. As the demand for improvement of physical beauty has gone up, so have the problems associated with it, such as lifestyle changes and air pollution. The concept of beauty and cosmetics has been around since the beginning of human civilization. Ayurveda has always seen beauty as an important concept and asserts that healthy skin is dependent on the overall health of an individual. Numerous skin care treatments are suggested by Ayurveda that should be followed throughout life.",
      description2:"Due to the increased demand of the society, the area of cosmetology is growing quickly. Ayurveda is an ancient practice of native medicine which is unique in that it is not only a branch of healthcare, but also an art of life for people. There is a huge requirement of Ayurveda in the field of cosmetology because of its distinct concept of beauty and its cost-effective, durable, and safe beauty treatments without any unfavorable effects."
    },
    headparabut9: {
      heading:"Role Of Dinacharya",
      description:"In Ayurvedic texts, ‘Ritucharya’ is discussed in detail in order to keep people healthy and beautiful. In terms of cosmetics, we can find advice like in cold months (Hemanta and Sishira) you should apply Agaru paste to your skin to protect it from the cold. During Sishira, it is mentioned to avoid foods and drinks that are pungent, bitter, astringent, light, cold, and increase Vata. During Spring, it is suggested to use a paste made of Sandal and Agaru and to eat mainly wheat and barley. For the summer season, one should consume sweet, cold, liquid and fatty foods and drinks, since the sun’s rays draw out the moisture from nature. It is also suggested to sleep in a cool room during the day and to sleep on the roof of the house with plenty of air and cooled with moonlight, and to have Sandal paste on the body. During summertime, it is important to take precautions to protect oneself from the extreme temperatures, such as finding solace in forests, taking a dip in cold water, and being surrounded by blossoming flowers. This shows a great attention to both beauty and health."
    },
    headparabut10: {
      heading:"Scope Of Ayurveda In Cosmetology",
      description:"Ayurveda, the science of life, has extensively studied the field of cosmetics, addressing both its preventative and promotive aspects of beauty, as well as its curative aspects related to any beauty ailments. Ayurvedic cosmetics are not just mundane cosmetics, but rather Cosmo-therapeutics. Rasayana Tantra is one of the eight main branches of Ayurveda that also covers various aspects of cosmetology. The singular Rasayana approach offers herbal, multiple herbal and herbomineral preparations, which are employed to enhance beauty, counteract the effects of aging, and stave off premature changes that harm beauty. Ayurvedic cosmetics include oral health boosters, hair care remedies, dental care products, and bath items/deodorants, all of which must be standardized and require safety tests, systematic clinical trials in order to gain global acceptance."
    },
    beautyWellness: [
        {
          title: "The Role Of Exercise",
          description:
            "Engaging in physical activity on a regular basis is critical for overall health and beauty since it helps open up the body's pathways, enabling it to be purged of toxins and be provided with the required nutrients. Exercise is particularly beneficial to the skin since it helps to eliminate waste and allow it to regenerate itself, appearing fresh and clear. Additionally, exercise reinforces the muscles and keeps them toned and fit. Exercising has a positive impact on the mental and emotional state of an individual, decreasing tension and anxiety, resulting in a feeling of contentment. It also aids in getting a deep and restful sleep. When exercising, it is advisable to do so at half the capacity and to be mindful of the temperature, avoiding overexertion. Additionally, one should strive to breathe evenly, which strengthens the lungs and digestive organs, significantly improving the skin's texture and colour. It is not recommended to engage in physical activity when one is suffering from respiratory issues, inflammation in any part of the body, or digestive problems.",
        },
        {
          title: "Aachara Rasayana",
          description:
            "According to Acharya Charaka, Ayurveda's holistic view of beauty covers physical, mental, and spiritual health. He states that if one adheres to the correct health codes, he or she can live up to one hundred years without any illness. Such an individual will be praised by the wise and will fill the world with his or her renown, acquire virtues and wealth, and gain the friendship of all living creatures. In order to promote social progress, Aachara Rasayana is particularly helpful for enhancing a person's character. To stay in cleanliness, one should bathe, clean their excretory passages, and cut their hair, nails, and toenails at least three times a fortnight. Furthermore, one's clothes should be undamaged, they should use pleasant-smelling flowers and fragrances, and their hair should be stylishly groomed.",
        },
        {
          title: "The Importance Of Diet For Beauty",
          description:
            "According to Ayurvedic medicine, having excellent digestion and elimination of waste products are vital for having a healthy, balanced and attractive body. These factors are responsible for clear skin, bright eyes, lustrous hair, sturdy nails, strength, mental clarity and a pleasant character. The tremendous benefit of the Ayurvedic approach to health and beauty is the focus on treating individuals as unique persons. Instead of just focusing on the caloric content or the nutrients of food, like in the West, the Ayurvedic diet is based more on the individual's preference of color, smell, temperature, taste and texture. This way, it is believed that when the body is out of balance, it will naturally be attracted to the foods it needs.",
        },
        {
          title: "Rasayana Therapy",
          description:
            "Ayurveda has a one-of-a-kind treatment known as Rasayana Therapy. This is a testament to the Acharyas' keen sense of aesthetics. With this therapy, their aim was to keep a person looking young and attractive even as they aged. Additionally, they tried to reverse the effects of aging, so that the person could look younger again. Therefore, Rasayana Therapy is useful in sustaining youthfulness, slowing down the signs of aging, and reversing the effects of old age.",
        },
      ],

    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "How often should I receive Ayurvedic cosmetology treatments?",
          answer: "The frequency of treatments depends on your skin type and concerns. Typically, clients benefit from weekly sessions initially, then transition to monthly maintenance."
        },
        {
          question: "Are the products safe for sensitive skin?",
          answer: "Yes, our Ayurvedic products are formulated with gentle, natural ingredients that are suitable for all skin types, including sensitive skin."
        }
      ]
    }
  },
  "skin-complaints":{
    hero:{
      title: "Ayurvedic Treatment for Skin Complaints In Kerala",
      description:
        "Have you ever wondered how our bodies manage to stay healthy? Our skin, the largest organ in our body, plays a vital role in maintaining our overall well-being. This complex organ serves as a protective barrier, aids in sensation, and regulates body temperature.Exposure to the sun’s nutritious rays helps our skin produce Vitamin D. You can search online for “Ayurvedic Treatment for Skin Rashes, Itching, and Allergies” and explore herbal remedies to enhance your skin’s health. In Kerala, Ayurvedic treatment for skin diseases focuses on providing medications that address the root cause of the condition, rather than just alleviating external symptoms.  ",
      image: "/images/piles1.jpg",
      imageAlt: "Rectal Treatment",
      },

    symptomsandtypes: {
        mainTitle: "Symptoms Of Arthritis",

        intro:
          "Our skin performs several vital functions, including:",

        mainPoints: [
          "Facilitating perception and interaction with the environment through gross and fine motor movements",

          "Housing blood vessels that dilate and constrict to regulate temperature, aided by subcutaneous fat",

          "Defending the body against physical injuries, chemical assaults and infectious disease entry",

          "Facilitating vitamin D absorption, essential for the body's defense against diseases",

          "Producing melanin, which protects the body from harmful UV rays",

          "Aiding in wound healing, including cuts, wounds and fissures",

          "Regulating body moisture"
        ],

        note:
          "Note that individual skin characteristics, such as age, allergies, sensitivity, dryness, oiliness, UV damage, wrinkles and congestion, can affect skin health.",

        typesHeading: "Types Of Skin Disease",

        typesDescription:
          "Here are the skin disease symptoms and conditions listed in point form. Inflammation, cracking and itching are common symptoms of various skin diseases.",

        types: [
          {
            title: "Allergic Eczema",

            points: [
              "Can form blisters that dry and become crusty",
              "Burn-like",
              "Inflamed",
              "Scaly",
              "Raw",
              "Red"
            ]
          },

          {
            title: "Rashes",

            points: [
              "Red, inflamed and painful skin lumps",
              "Parasite infections",
              "Fungal infections",
              "Allergic reactions"
            ]
          },

          {
            title: "Hives",

            points: [
              "Can be circular or irregular, small or large, ring-shaped",
              "Appear in response to allergens",
              "Raised, itchy welts",
              "Painful to the touch"
            ]
          },

          {
            title: "Pruritus (Itchy Skin)",

            points: [
              "Can be due to underlying skin issues or other health conditions",
              "Persistent skin irritation",
              "Urge to scratch"
            ]
          },

          {
            title: "Dry Skin",

            points: [
              "Often occurs on arms, legs and abdomen",
              "Frequently caused by lifestyle factors",
              "Cracking",
              "Scaling",
              "Itching"
            ]
          },

          {
            title: "Acne (Pimples)",

            points: [
              "Occurs when natural skin oil interacts with dust and dirt",
              "Common among teenagers",
              "Caused by clogged pores"
            ]
          }
        ]
    },
    headparabut1:{

      heading:"Ayurvedic Therapies To Reduce Skin Problems",
      description:"Ayurveda can significantly help calm your skin. Skin disorders (kushta) arise from the simultaneous vitiation of the three Doshas (Vata, Pitta, Kapha). To treat kushta dominated by Vata, patients are given herbal ghee internally. Those with kushta dominated by Kapha undergo Vamana, a therapeutic emetic treatment. Meanwhile, patients with kushta dominated by Pitta receive Virechana, a purgation therapy"

    },
    panchakarma2: {
        heading: "Panchakarma",

        description:
          "Panchakarma therapy is a valuable approach in addressing skin-related issues. This Ayurvedic treatment encompasses five detoxification methods, which are extensively used to treat skin diseases. Various skin disorders, including eczema, psoriasis and acne, can be effectively managed through Panchakarma. The treatment typically involves:",

        items: [
          "Consuming medicated ghee for a specified period",

          "Inducing sweat to eliminate toxins",

          "Oil massage for the entire body",

          "Prachchana and Raktamokshana (blood-letting therapy) for mild symptoms of kushta, using a coarse instrument to draw blood"
        ],

        lastItem:
          "Sira Vyadha or Raktamokshana (vein puncture) for more severe conditions",

        bottomText:
          "By undergoing Panchakarma treatment, individuals can experience significant relief from skin-related issues and promote overall well-being."
    },

    Box4row: {
        cards: [
          {
            title: "Pain And Stiffness",

            description:
              "Persistent joint pain and stiffness may worsen during movement and can limit day-to-day activities."
          },

          {
            title: "Inflammation And Swelling",

            description:
              "Inflamed joints often appear swollen, tender and warm due to underlying irritation and imbalance."
          },

          {
            title: "Reduced Flexibility",

            description:
              "Joint mobility gradually decreases making it difficult to bend, stretch or perform routine movements comfortably."
          },

          {
            title: "Fatigue And Weakness",

            description:
              "Chronic discomfort and inflammation may lead to tiredness, reduced energy and muscular weakness."
          }
        ]
    },

    headparabut2:{

      heading:"Application Of Aloe Vera Gel",
      description:"Aloe vera gel’s cooling action can help soothe irritated skin and irritation. Apply the gel to your skin once or twice a day to apply this cure."

    },
    headparabut3:{

      heading:"Useful Herbs For Bathing",
      description:"The paste or decoction of Vasa (Adhatoda vasica), Triphala (comprising Haritaki, Bibhitaki, and Amalaki), and Brhati (Solanum indicum) are suitable for treating skin diseases. Sevya is used for Udvartana (unction) and Pralepa (external application) in patients suffering from Kustha. The decoction of Khadira (Acacia catechu), Avaghata (Karnikara), Kakubha (Terminalia arjuna), Rohitaka, Lodhra (Symplocos racemosa), Kutaja (Hollarhena antidysentrica), Dhava (Anogeissus latifolia), Nimba (Azadirachta indica), Saptacchada (Saptaparna) (Alstonia scholaris) – stem bark, and Karvira (Nerium indicum) is useful for bathing and drinking by patients suffering from Kustha."

    },
    headparabut4:{

      heading:"Takeaway",
      description:"Skin diseases are treated in Ayurveda through dietary adjustments and natural therapies. Purification procedures are frequently used, which are believed to help reduce eczema and other skin diseases by eliminating toxins from the body. If you want to undergo Ayurvedic therapies, make sure you consult with a qualified Ayurvedic practitioner."

    },
    tabsorange: {
        heading: "Pathya – Diet",

        description:
          "Maintaining Pathya (dietary regimen) during medication and treatment helps determine the curability of skin diseases. Therefore, patients suffering from skin diseases should follow these dietary guidelines:",

        items: [
          {
            title: "Laghu Ahara",

            span: "Consume light and nutritious meals"
          },

          {
            title: "NASYA",

            span: "Nasal administration of herbal oils"
          },

          {
            title: "GREEVA VASTHI",

            span: "Oil pooling treatment for neck region"
          },

          {
            title: "PIZHICHIL",

            span: "Warm oil streaming rejuvenation therapy"
          },

          {
            title: "NJAVARA KIZHI",

            span: "Rice bundle fomentation therapy"
          },

          {
            title: "PATRA PINDA SWEDA",

            span: "Herbal leaf poultice sudation"
          },
        ]
      },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },


  },
  "thyroid-treatment":{

    hero:{
      title:"Ayurvedic Treatment for Thyroid In Kerala",
      description:"Thyroid problems result from malfunctioning thyroid glands, butterfly-shaped glands located in the front of the neck, in front of the windpipe, just below the larynx. The gland secretes three main hormones: Triiodothyronine (T3), Tetraiodothyroxine (T4), and Calcitonin. Although T3 is the main functional hormone, 90% of thyroid secretion is of T4. These hormones affect virtually every organ function, including brain and somatic development in infants and almost all metabolic activity in adults.When you experience periods of fatigue and sleep disorders, weight variations, mood and mental disorders, bowel problems, muscle and joint problems, irregular periods, infertility, libido problems, skin changes, body changes, temperature changes, cholesterol issues, high blood pressure, abnormal heart rate, neck enlargement, and psychological issues, you should suspect a faulty thyroid. These symptoms mostly indicate the existence of thyroid disorders in the body.",
      image:"/images/thyroid1.png",
      imageAlt:""

    },
    seperate2box: {
      leftTitle: "Symptoms Of Goiter Include",

      leftItems: [
        "Dehydrated discs: In this condition discs may loss its spongy nature and become dry results in direct bone to bone contact which cause pain.",
        "Intervetebral disc prolapse: Sometime IV discs may slip from vertebral space causing compression to nerve roots resulting in pain, numbness and disabilities.",
        "Bone spurs: Degeneration of vertebrae sometime results in abnormal growth of bony structure called as spur. This may come in contact with nerve root or spine."
      ],

      rightTitle: "Symptoms Of Thyroid Nodules",

      rightItems: [
        "Pain over the cervical region usually increased by excess movement and strain",
        "Referred pain: pain may transfer to the back of head, shoulders and upper arms",
        "Feel of giddiness on the sudden movement of the head",
        "Numbness, tingling, or weakness in upper limbs",
        "Intermittent pain in the neck and upper back",
        "Stiffness of neck"
      ]
    },
    singlebox: {
       heading: "Symptoms Of Hyperthyrodism",

      leftItems: [
        "Unintentional weight loss, even when your appetite and food intake stay the same or increase",
        "Confusion, disorientation, and personality shifts are all common symptoms",
        "Fatigue (a lack of energy that can be debilitating)",
        "Urine with a brownish or orange tint",
        "Stool with blood in it",
        "Appetite Loss",
        "Fever"
      ],

      rightItems: [
        "Nervousness, anxiety and irritability",
        "Skin or eye whites that have become yellow (jaundice)",
        "On the skin, there are spider-like blood veins.",
        "bloating and abdominal pain",
        "Vomiting and Nausea",
        "Stools in light colors",
        "Itchy skin"
      ]
    },
    headparabut1:{

      description:"There is no doubt that thyroid disorders need to be treated in a timely manner, but the type and timing of treatment also matter. Medications are usually prescribed to correct hormonal imbalances in thyroid disorders. However, many people wonder if alternative medicine can help manage their symptoms. When it comes to managing thyroid disorders, Ayurvedic medicine can work wonders in normalizing glandular and hormonal abnormalities. ",

      description2:"In the world of traditional medicine, Ayurvedic medicine is one of the oldest, originating from India. It seeks to prevent disease by balancing the mind, spirit, and body. The structural issues of the thyroid, mainly nodules and goiter, are well-documented in Ayurvedic classical texts like Charaka Samhita and Ashtanga Hridaya. Galaganda is the term used for structural problems of the thyroid. Galaganda is a swelling that hangs over the neck region, like a scrotum, either large or small. This disease entity involves Ama, Dhatvagnimandhya, and impaired Vata, Kapha, and Medo doshas.",

      description3:"The Ayurvedic thyroid cure includes:",

      description4:"Shodhana (detoxification), Shamana (medication), Pathyaahara (dietary regimes), Vihara (lifestyle adaptations)",

      description5:"The functional problems of hyper and hypothyroidism are caused by derangement of Agni in our body. There are three classes of Agni in our body: Jadaragni, Dhatwagni, and Bhutagni.",

      description6:"Jadaragni, the prime Agni, is responsible for digestion and absorption of nutrition from food, and its seat is in the Gastrointestinal Tract (GIT). Dhatwagni nourishes the respective Dhatus (tissues); for example, Asthi Dhatwagni deals with the metabolism of calcium and other minerals essential for bone development, and Raktha Dhatwagni nourishes the blood. Any derangement (either hyper or hypo functioning) of these Agnis affects the respective Dhatu Poshana (nutrition). Lastly, Bhutagni helps in the nourishment of the respective Bhutas (elements) among the Panchamahabhootas (five elements): earth, water, fire, air, and ether.",

      description7:"Therefore, the treatment of functional problems of the thyroid, such as hyper and hypothyroidism, is essentially the correction of the deranged Agni in our body. The Agni is deranged by the doshas (Vata, Pitta, and Kapha). When Agni is affected by Vata, it becomes Vishama (irregular); when vitiated by Pitta, it becomes Teeshna (intense); and when affected by Kapha, it becomes Manda (dull).",

      description8:"Manda Agni: inadequate digestion and reduced metabolism, Teekshana Agni: fast digestion, highly increased metabolism, Vishama Agni: sometimes increased and at times decreased digestion and faulty metabolism",

      description9:"It can be considered that in both hypothyroidism and hyperthyroidism, the vitiation of Vata is invariable, along with the vitiation of Kapha in hypothyroidism and Pitta in hyperthyroidism. So, the treatment of frank hypothyroidism is Kapha-Vata pacification, and hyperthyroidism is Pitta-Vata pacification.The vitiation of doshas is usually diagnosed by lakshanas (symptoms), and since these can vary from person to person, the treatment is also tailor-made. According to Ayurveda, early signs of thyroid disease are chronic fatigue, dullness, and a weakened immune system. It is easier to treat thyroid disease if detected early, as a healthy diet can be consumed, and nutrients can be provided to the body to pacify the doshas involved.",

    },

    headparabut2:{

      heading:"Thyroid Treatment in Ayurveda",
      description1:"Ayurveda treats thyroid problems by incorporating foods that can curb these issues into your daily diet. For example, Jamkumbhi and drumstick increase iodine levels in the body, while Dhaniya (coriander) and Jeerak siddha jala help in the recovery of swelling associated with thyroid disorders. Additionally, boiling ginger in water and drinking it like tea can benefit thyroid function.",

      description2:"However, it is recommended to avoid using raw vegetables, especially cauliflower, kale, broccoli, and Brussels sprouts, as they can enlarge a faulty thyroid and become a goiter. These vegetables are known as goitrogens.",

      description3:"Lack of vitamin D can exacerbate thyroid problems, and treatment for the deficiency can be achieved through exposure to early morning sunlight. Outdoor exercise not only stimulates the thyroid glands and boosts immunity but also regulates calcium metabolism.",

      description4:"Thyroid patients should avoid all forms of processed sugar and limit their intake of natural sugar-containing foods. Fruits like apples and bananas, as well as vegetables like broccoli, spinach, and dark green leafy vegetables, are high in vitamin A.",

      description5:"According to Ayurveda, fruits and vegetables are considered healthy whole foods for treating thyroid issues. Nutritional deficiencies may increase the risk of health problems if a healthy diet is not consumed. Research suggests that eating highly processed foods may increase the risk of developing autoimmune diseases, although more research is needed.",

      description6:"Ashwagandha (Withania somnifera), an adaptogen herb, helps reduce stress, according to Ayurvedic treatment for hypothyroidism. Native to Northern Africa and India, it is one of the most important herbs in Ayurveda. Ayurvedic thyroid care may be helped by lowering stress hormone levels, but further study is needed to determine its effectiveness. In a double-blind placebo-controlled trial, researchers examined the effect of Ashwagandha on 50 people with mild hypothyroidism. Participants took 600 milligrams of Ashwagandha root daily for 8 weeks, resulting in significantly improved thyroid hormone levels compared to the placebo group.",

      description7:"A 2014 study also found that Ashwagandha improved thyroid hormone levels in people with bipolar disorder. In cases of extreme vitiation of doshas, specific Panchakarma procedures like Vamana, Nasya, Vasthi, and Virechana may be necessary to alleviate symptoms. Tailor-made medications, specific Yoga postures, Pranayama (especially Nadishudhi and Bhastrika), and Meditation can also help manage thyroid issues.",

      description8:"Ayurveda treatment for thyroid can be used in conjunction with standard treatment, but standard treatments should not be discontinued. It is essential to consult with a doctor before taking Ayurvedic herbs.",

      description9:"As one of the leading Ayurvedic multispecialty hospitals in India, Sreerudra Ayurveda is a top thyroid treatment center in Kerala, offering the best Ayurvedic medicine for thyroid disorders.",

    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },
    



  },

  "diabetes":{

    hero:{
      title:"Ayurvedic Treatment For Diabetes In Kerala",
      description:"Diabetes is a disease characterized by high glucose levels in the blood. While there is no cure for diabetes, it can be managed through a combination of a balanced diet, regular exercise, and medication. Diabetes Mellitus, commonly referred to as diabetes, is a metabolic disorder resulting from faulty insulin secretion, insulin resistance, or both. In all cases, the outcome is elevated blood glucose levels, a condition known as hyperglycemia.This disorder also affects the processing of fat, carbohydrates, and protein in the body, impacting overall metabolism. Prolonged diabetes increases the risk of developing complications such as neuropathy, retinopathy, nephropathy, and cardiovascular conditions. Many individuals are now turning to Ayurvedic treatment for diabetes due to its holistic approach, which incorporates natural and safe herbal medications and lifestyle changes. At Sreerudra, our experienced Ayurvedic doctors can help you control sugar levels in a way that is easily adaptable and provide the best Ayurvedic treatment for diabetes in Kerala.",
      image:"/images/diabetes1.png",
      imageAlt:"thyroid"

    },

    imagetextvertical: {
        heading: "TYPES OF DIABETES",

        items: [
          {
            image: "/images/diabetes2.png",

            title: "Type-1 Diabetes",

            description:
              "If you have type 1 diabetes, it means your body doesn’t produce insulin. For unknown reasons, the immune system attacks and destroys the pancreatic cells responsible for insulin production. Type 1 diabetes is typically diagnosed in children and young adults, but it can occur at any age, which is why it’s also known as Juvenile diabetes. People with type 1 diabetes need to take insulin daily to stay alive. Ayurvedic treatment for diabetes type 1 includes Panchakarma and other classical Ayurvedic detoxification and purification therapies, along with herbal medications. How to cure juvenile diabetes? Juvenile diabetes canbe managed by controlling blood sugar levels through exercise, dietary restrictions, and certain herbs likeGymnema Sylvestre (also known as “Madhunashini” or “Chakkarakolli”), which have shown remarkable results intype 1 diabetes treatment."
          },

          {
            image: "/images/diabetes3.png",

            title: "Type-2 Diabetes ",

            description:
              "If you have type 2 diabetes, your body either doesn’t produce or effectively use the insulin it produces. This is the most common type of diabetes, predominantly affecting the middle-aged to elderly population. Among various Ayurvedic treatments for diabetes type 2, herbal therapy has proven to be the most beneficial. This can take the form of internal medications, herb-infused oil for abhyanga (massage), or powdered herbs for Udwarthanam (a detoxification therapy)."
          },

          {
            image: "/images/diabetes4.png",

            title: "Gestational Diabetes ",

            description:
              "The type of diabetes that develops in women during pregnancy and typically resolves after the baby is born is known as gestational diabetes. However, if you have had gestational diabetes, you have a higher chance of developing type 2 diabetes later. Various dietary changes are introduced in Ayurvedic remedies for gestational diabetes, such as incorporating barley into your regular diet and avoiding sugar and sugar products, among others"
          }
        ]
      },
      headparabut1:{
        heading:"How to cure diabetes during pregnancy?",
        description:"Controlling or curing gestational diabetes is crucial to minimize potential risks for the baby and complications later in pregnancy. Ayurvedic treatment for gestational diabetes begins with the inclusion of cereals that mature in 60 days, such as rice, wheat, and Kodo millet. Certain herbs, consumed with a dash of honey, have been found to have curative properties, including Triphala, cardamom, fenugreek, coriander, and Gokshura. A common question is how to reduce gestational diabetes naturally during pregnancy. Lifestyle changes like regular exercises, such as yoga, light walking, and Pranayama, along with oil massages and steam baths, can also help manage gestational diabetes.",
      },

      headparabut2:{
        heading:"Causes",
        description:"Over time, our daily lives have become increasingly hectic and time-bound, leading to a lack of physical activity and sleep deprivation in a significant portion of the population. Additionally, stress at work, home, and in studies, combined with an improper diet, have contributed to the rising number of diabetic cases in our country. Essentially, diabetes is a metabolic disorder where the body’s ability to effectively utilize the glucose produced is impaired, leading to elevated glucose levels in the blood and urine. Ayurvedic treatment for diabetes combines internal and external therapies to help purify the body and stimulate healing from the inside out.",
      },
      grids: {
        heading: "Signs & Symptoms",
        items: [
          "Tingling Sensation or Numbness in the Feet or Hands",
          "Sore Patches on the Skin that do not Heal",
          "Enhanced Thirst and Frequent Urination",
          "Heightened Hunger",
          "Drastic Weight Loss",
          "Blurry Vision",
          "Fatigue",
        ],
      },
      headparabut3:{
        heading:"Diabetes And Ayurveda",
        description:"In Ayurveda, diabetes is referred to as “Madhumeha” or “Kshaudrameha”, which is subcategorized under “Prameha”. Early diagnosis and treatment can help reverse the condition. Ayurveda offers customized treatment for diabetes patients based on each individual’s unique condition. At Sreerudra, our experienced Ayurvedic doctors can help you control sugar levels in ways that are easily adaptable to your lifestyle. Through personalized consultation, we ensure the delivery of the best Ayurvedic treatment for diabetes in Kerala.",
      },
      headparabut4:{
        heading:"Diagnosis",
        description:"A blood test that measures average blood sugar levels over the past two to three months, without requiring fasting, is called the A1C test. A result of 5.7% or below is considered normal, while a reading of 6.5% or higher indicates diabetes. However, A1C test results can be affected in certain cases, such as pregnancy, and additional tests may be necessary, including:",

        description2:"Random Blood Sugar: Blood is collected at a random time to check blood sugar levels. A reading of 200 mg/dL (11.1 mmol/L) or higher suggests diabetes.",

        description3:" Fasting Blood Sugar: Blood is collected after overnight fasting to check sugar levels. A reading of 126 mg/dL (7.0 mmol/L) or higher suggests diabetes.",

      },
      seperate2box: {
          leftTitle: "Diabetes And Neuropathy",

          leftItems: [
            "Prolonged diabetes can result in damage or dysfunction of one or more nerves, leading to tingling sensations, numbness, pain, and weakness in certain areas. This condition is called Diabetic Neuropathy. Depending on the nerves affected, symptoms of diabetic neuropathy can vary from numbness or pain in the arms and legs (indicating an imbalance of Vata Dosha), to burning sensations (resulting from an imbalance of Pitta Dosha), to more serious issues including heart and blood vessel problems. Therefore, diabetic neuropathy treatment plans may need to involve therapies that pacify both doshas. Diabetic neuropathy is identified with the ICD-10 code."
          ],

          rightTitle: "Diabetes and Retinopathy",

          rightItems: [
            "Ayurvedic treatment for diabetic retinopathy can effectively prevent chronic leakages from the retinal blood vessels. Repeated physical therapies in Panchakarma are typically used to control and improve the condition, such as Netradhara, Lepa, Tharpana, and others. Ayurvedic treatment for diabetic retinopathy is tailored after assessing the stage of retinopathy the patient is in, along with a comprehensive analysis of their overall health conditions."
          ]
      },
      headparabut5:{
        heading:"There are four diabetic retinopathy stages",
        description:"Embracing an Ayurvedic lifestyle by incorporating more herbs and wholesome foods into your diet can help your body retain essential nutrients while eliminating accumulated toxins. Ayurvedic treatment for diabetic retinopathy is a comprehensive approach that combines various therapies to address different bodily aspects. Ayurvedic therapies for diabetic retinopathy include Thakradhara and Virechanam. After a few sessions, patients typically experience significant relief. Ayurveda also recommends home remedies for diabetic retinopathy as a means of temporary relief in the early stages or as an emergency solution for sudden discomfort. The stages of diabetic retinopathy include:",
        lists:[
          "Mild Nonproliferative Retinopathy (initial stage)",
          "Moderate Nonproliferative Retinopathy (blood vessels responsible for retinal nourishment become blocked)",
          "Severe Nonproliferative Retinopathy (advanced stage with inadequate blood supply to the retina)",
          "Proliferative Retinopathy (final advanced stage characterized by abnormal growth of new blood vessels)"
        ],

        
        
      },
      headparabut6:{
        heading:"Diabetic Nephropathy",
        description:"A herbal preparation that has proven effective in Ayurvedic treatment for diabetic nephropathy is Shilajitwadi. This formulation combines herbs like Shilajatu, Guggulu, and Guduchi, and has also shown efficacy in treating Mutravaha Srotas. Therefore, these preparations have been selected for the treatment of diabetic nephropathy. Diabetic nephropathy affects the kidneys, impairing their ability to perform their usual function of removing waste and excess fluid from the body. Researchers are currently developing a cure for diabetes-related kidney disease using regenerative medicine, which may also help reverse or slow down kidney damage caused by the disease.",
      },
      headparabut7:{
        heading:"Diabetes And Heart Disease",
        description:"The relationship between diabetes and heart disease is inextricable, as they often share common risk factors like high blood pressure and high cholesterol levels, which increase the likelihood of heart attacks and strokes. In the case of type 1 diabetes and heart disease, research has shown that the presence of calcification in arterial walls can lead to cardiovascular disease. Moreover, constant fluctuations in blood glucose levels can damage the heart, causing cardiac autoimmunity, a condition in which the body’s immune system attacks the heart, which is a primary link between diabetes and heart disease",
      },
      headparabut8:{
        heading:"Diabetes and Foot Disease",
        description:"Diabetic foot disease, known as Madhumehajanya Vrana in Ayurveda, may result from two diabetes-induced conditions: Diabetic neuropathy (nerve damage) and Peripheral vascular disease (impaired blood flow). Symptoms and signs of diabetic foot include changes in skin color, foot or ankle swelling, leg pain, fungal infection in toenails, and dry cracks around the heels. If left unattended, these symptoms can lead to severe complications, including amputations. Ayurvedic medications such as Haritaki, Chandraprabha Vati, Swaran Shila, and Madhusam powder may help manage diabetes and alleviate diabetic foot infection symptoms.",
      },
      faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },

  },
  "mental-disorders":{

    hero:{
      title:"Ayurvedic Treatment for Mental Disorders In Kerala",
      description:"The term “mental disease” or “mental disorder” encompasses not only insanity and related mental derangements but also emotional disorders. When emotional variables exceed the point of normalcy, they often spiral out of control and develop into mental disease syndromes. The brain, comprising 100 billion neurons, forms communication networks that facilitate specific functions like thinking, learning, remembering, seeing, hearing, and smelling. Brain cells operate like miniature factories, requiring fuel and oxygen for optimal coordination. Damage to this system can lead to various brain problems, including Alzheimer’s disease, Parkinson’s disease, Huntington’s disease, depression, epilepsy, schizophrenia, anxiety, and more.With a team of experienced and skilled practitioners, the hospital offers a unique combination of Ayurvedic treatments, including massage, panchakarma, yoga, and herbal remedies, alongside modern treatments like physiotherapy, providing a holistic approach to healing that can effectively and sustainably alleviate back pain. With its attention to detail, SreeRudra Ayurveda Multispecialty Hospital is the ultimate destination for those suffering from back pain to find a complete cure.",
      image:"/images/mental1.png",
      imageAlt:"mental1"
    },
    mentalwellness: {
          heading: "Ayurvedic Care For Mental Wellness",

          topImage: "/images/mental1.png",

          topDescriptions: [
            "Ayurvedic Treatment For Mental Disorders Is Gaining Recognition, With Herbal Therapy, Yoga, Meditation, Naturopathy, Acupressure, And Other Natural Remedies Being Reintroduced. Many Individuals And Organizations Are Working To Address The Body’s Fundamental Healing Needs. People Are Shifting From Relying On Painkillers To Seeking Natural Remedies Like Ayurveda, Traditional Chinese Medicine, Siddha, Unani, Homeopathy, And Folklore Medicines. Yoga And Meditation Are Essential For Maintaining Physical And Mental Health, Increasing Blood Flow And Reducing Mental Stress.",

            "Stress Is Alleviated Through The Use Of Plant-Based Medical Systems, Which Have Proven Revolutionary Worldwide. This Is Equally True For Mental Disorder Treatments. Ayurvedic Treatment For Mental Disorders Has Established That Herbs Are Just As Effective As Prescription Medications In Treating Panic And Anxiety That Affect The Central Nervous System, Without The Unfavorable Side Effects. Lemon Balm Reduces Anxiety And Stress, While Chamomile Has Long Been Recommended For Anxiety. Kava Roots Are Known For Treating Sleep Issues Like Insomnia And Anxiety, And Passion Blossom Is Used To Treat Anxiety When Added To Food Or Tea."
          ],

          bottomImage: "/images/mental1.png",

          bottomDescriptions: [
            "The world is currently seeking Ayurvedic mental illness treatments for psychiatric problems that have no or few side effects and are based on brain healing prescriptions from traditional medicines like Ayurveda. Indian medical systems, particularly Ayurveda, are well-developed for treating nervous system problems. Ayurveda outlines the use of hundreds of plants, singly or in combination, to heal brain problems. While allopathic medicines are effective in emergencies, they only provide partial relief by treating symptoms, not underlying causes. Allopathy does not allow for individuality, as individuals with various illnesses exhibiting similar symptoms are given the same medication",

            "It Has Been Demonstrated That Ayurvedic Remedies Are Extremely Effective Against Such Diseases. The World Is Currently Turning To Ancient Medicines, Particularly Ayurveda, For A Reliable Treatment With No Or Few Side Effects, Due To Its Capacity To Heal The Brain. This Analysis Unequivocally Demonstrates The Efficacy Of The Ayurvedic Medical System In Treating The Majority Of Brain-Related Conditions.",

            "The best Ayurvedic treatment for psychiatric problems in Kerala is offered by Sreerudra Ayurveda. They follow the fundamental principle of the five major elements, which states that any defect, tissue, or impurity must be in perfect harmony with each of the five elements that comprise the human body: earth (prithvi), water (jal), fire (agni), air (vayu), and space (akash). The three elemental energies – Vata (air and space combined, resulting in wind), Pitta (fire and water combined, resulting in bile), and Kapha (water and earth combined, resulting in phlegm) – must be in equilibrium. According to Ayurveda, when these three energies are balanced or present in equal amounts, the body remains healthy; otherwise, it becomes unwell in various ways.",
          ],

          buttonText: "Schedule Your Consultation"
     },
     faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Can Ayurveda completely cure varicose veins?",
          answer: "Yes, Ayurvedic treatments like Raktamokshana and specific herbal protocols can significantly reduce swelling and strengthen vein walls, often leading to a complete recovery if addressed early.",
        },
        {
          question: "How long does the treatment take?",
          answer: "The duration depends on the severity of the condition. Generally, noticeable improvements start within 2-4 weeks of consistent treatment and lifestyle modifications.",
        },
        {
          question: "Is Leech therapy (Raktamokshana) painful?",
          answer: "Most patients experience only a mild pricking sensation. Leeches release natural anesthetics and anticoagulants that make the process comfortable and highly effective for venous congestion.",
        },
        {
          question: "Are there any dietary restrictions?",
          answer: "Ayurveda recommends avoiding excessively spicy, salty, and heavy-to-digest foods while increasing the intake of fiber-rich fruits and vegetables to prevent constipation, which can worsen varicose veins.",
        },
      ],
    },
  },
  "osteoarthritis":{

      hero:{
        title:"Ayurvedic Treatment For Osteoarthritis In Kerala",
        description:"Osteoarthritis (OA) is a condition that usually develops gradually, over several years, due to wear and tear of joints and affects a number of different joints. Therefore, they cannot act normally. Due to gradual erosion, ligaments face stretching that initiates the pain. Females are more prone to this than males especially after menopause. its high prevalence among elderly people made it as a major cause of disability among them.Osteoarthritis is a chronic degenerative disorder of multifactorial etiology, characterized by loss of articular cartilage and periarticular bone remodeling. It involves the entire joint including the nearby muscles, underlying bone, ligaments, synovium and capsule. Ayurvedic Treatment For Osteoarthritis can ensure fast and effective relief from Osteoarthritis",
        image:"/images/osteoarthiritis.png",
        imageAlt:"osteoarthritis.png"
      },
      risks: {
      heading: "Top Risks You Can't Ignore",
      items: [
        { text: "Age", img: "/images/age.png" },
        { text: "Trauma", img: "/images/physic.png" },
        { text: "Sex", img: "/images/yoga.png" },
        { text: "Bad posture", img: "/images/weight.png" },
        { text: "Obesity", img: "/images/exercise.png" },
        { text: "Diseases like Hyperparathyroidism, Diabetes mellitus", img: "/images/smoke.png" },
      ],
      videoSection: {
        heading: "Treatment Explained by a Doctor",
        subtext:
          "Understand the procedure, benefits, and important facts directly from a doctor.",
        image: "/images/doctor.png",
      },
    },
    seperate2box: {
          leftTitle: "Symptoms",

          leftItems: [
            "Joint Pain- Most important symptom. Typically, the pain of osteoarthritis is aggravated by movement of joints and relieved by rest, but as the disease progresses, it may become painfull even during resting.",
            "Stiffness- Progressive stiffness of the involved joint upon arising in the morning or after a period of inactivity may be prominent but usually lasts less than 20 min. It is due to spasm of muscles."
          ],

          rightTitle: "Signs",

          rightItems: [
            "Swelling– Physical examination of the osteoarthritis joint reveals localized soft tissue swelling of mild degree. It is due to the changes in articular ends.",
            "Crepitus– rubbing sound or feeling on joint movement is called as crepitus. It is one of the characteristic sign of osteoarthritis",
            "Local rise of temperature- On palpation of the joint local rise in temperature is an indicative of",
            "Muscle Atrophy– weakness of local muscles involved is atrophy which may be due to disuse or due to reflex inhibition of muscle contraction"
          ]
      },
      headparabut1:{
        heading:"Pathology Of Osteoarthritis",
        subtitle:"Symptoms",
        description:"The changes mainly occur in cartilages, adjacent bones and synovium. The changes are most marked in the weight-bearing regions of articular cartilages. Initially there will be thinning of cartilages which lead to structural change in them. Further progression causes loosening, flaking and fissuring of the cartilage resulting in breaking off of pieces of cartilage. Strength of associated bones will be reduced along with spur formation on margins of bones called as osteophytes."
      },
      headparabut2:{
        heading:"Main Reasons For The Development Of Osteoarthritis Are",

        grid:["The properties of the articular cartilage and bones are normal, but excessive load on the joint causes the tissue fail.","The applied load is reasonable, but the quality of the cartilage or bone are less."],

        description:"In the early stages the, cartilage is thicker than normal. With the progression of osteoarthritis, joint surface thins, then the cartilage softens."
      },
      white2box: {
          columns: [
            {
              sections: [
                {
                  title: "Laboratory And Radiological Findings",

                  points: [
                    "Radiological Techniques Like X Ray, MRI Scan, CT Scan Etc Are Used For Diagnosis. They Reveal Tissue Damage, Structural Changes Etc."
                  ]
                },

                {
                  title: "Conservative",

                  points: [
                    "Patients Should Be Educated About Their Condition And Its Progression, Including Advice On Joint Protection And Emphasizing The Importance Of Strengthening And Exercise.",

                    "Patients With Overweight Should Be Advised For Weight Loss."
                  ]
                },

                {
                  title: "Surgical",

                  points: [
                    "If Conservative And Medical Interventions Fail, Then Surgical Intervention May Be Considered, Especially If Their Joint Symptoms Have A Substantial Impact On Their Quality Of Life."
                  ]
                }
              ]
            },

            {
              sections: [
                {
                  title: "Management",

                  points: [
                    "The Management Of Osteoarthritis Involves Conservative, Medical To Surgical Methods."
                  ]
                },

                {
                  title: "Medical",

                  points: [
                    "Simple Analgesics And Topical NSAIDs Are The Base Of Most Medical Management For OA, Along With The Conservative Measures."
                  ]
                },

                {
                  title: "Nidana And Samprapthi",

                  points: [
                    "External Causes Include Injuries, Trauma Especially To Marma (Vital Points), Etc Are Coming Under This Category.",

                    "Internal Cause: Ahara Or Food Is The Most Common Contributing Factor For The Producing Of A Disease."
                  ]
                }
              ]
            }
          ]
        },
        headparabut4:{
        heading:"Main Reasons For The Development Of Osteoarthritis Are",

        grid:["Excessive physical straining which are intolerable to body.","Excessive or improper exercise.","Apart this physical causes excessive mental stress,sadness etc also vitiate vata.","Excessive fasting","Carrying excessive load causes excessive pressure and stretching effect over the structures of the joint"],
       },

  },




}
 
