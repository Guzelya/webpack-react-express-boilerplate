import React, { useContext } from "react";
import { LoggedInContext } from "../context/LoggedInContext";
// import { Carousel } from react-easy-carousel;
import slide1 from "../../assets/blood-ampules-10.jpeg";
import slide2 from "../../assets/lab-edit-6.jpeg";
import slide3 from "../../assets/lab-test-1.jpeg";
import pic1 from "../../assets/lavender-3.jpeg";
import pic2 from "../../assets/volunteer-2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

const Home = () => {
  const { authenticated } = useContext(LoggedInContext);
  console.log("authenticated", authenticated);
  const CarouselImages = [
    {
      title: "Blood Donors",
      image: slide1,
      button: (
        <button
          style={{
            position: "absolute",
            left: "30%",
            top: "70%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 100,
            height: 40,
            fontWeight: "bold",
            borderColor: "#7a7a85",
            borderWidth: 2,
            elevation: 6,
          }}
        >
          SIGN UP
        </button>
      ),
    },
    {
      title: "Blood Rcipients",
      image: slide2,
      button: (
        <button
          style={{
            position: "absolute",
            left: "42%",
            top: "75%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 150,
            height: 40,
            fontWeight: "bold",
            borderWidth: 2,
            borderColor: "#7a7a85",
            elevation: 6,
          }}
        >
          LEARN MORE
        </button>
      ),
    },
    {
      title: "Blood To Save Lives",
      image: slide3,
      button: (
        <button
          style={{
            position: "absolute",
            left: "42%",
            top: "75%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 150,
            height: 40,
            fontWeight: "bold",
            borderColor: "#7a7a85",
            borderWidth: 2,
            elevation: 6,
          }}
        >
          LEARN MORE
        </button>
      ),
    },
  ];
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Navbar />
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        // width={"80%"}
        // centerMode={true}
        // centerSlidePercentage={"80%"}
        // dynamicHeight={true}
        // thumbWidth="10"
        // style={{ height: "25%", width: "80%", backgroundColor: "red" }}
      >
        {CarouselImages.map((element, index) => {
          return (
            <div key={index} style={{ position: "relative" }}>
              <img src={element.image} />
              {element.button}
            </div>
          );
        })}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // height: "50%",
          height: 300,
          marginTop: "1%",
          marginBottom: "1%",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "50%",
            marginRight: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{ border: "2px solid black", width: "50%", borderRadius: 10 }}
        >
          <p>world</p>
        </div>
      </div>
      {/* <img src={pic1} style={{ width: "100%" }} /> */}
      <div
        style={{
          backgroundImage: `url(${pic1})`,
          // width: "100%",
          display: "flex",
          flexDirection: "row",
          // height: "50%",
          // height: 500,
        }}
      >
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        {/* <p>hello world</p> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${pic2})`,
          // width: "100%",
          // display: "flex",
          // flexDirection: "row",
          // height: "50%",
          height: 700,
        }}
      >
        <p>how to volunteer, learn more</p>
      </div>
      <p>
        Banner logo Participate in the 2021 international science photo
        competition! Hide Blood donation From Wikipedia, the free encyclopedia
        Jump to navigationJump to search "Give blood" redirects here. For other
        uses, see Give blood (disambiguation). "Blood donor" redirects here. For
        the TV episode, see The Blood Donor. Blood donation pictogram Blood
        donation center at the University Hospital of Basel, Switzerland. From
        left to right: Two cell separators for apheresis, secluded office for
        pre-donation blood pressure measurement and blood count, and on the
        right, chairs for whole blood donations. A blood donation occurs when a
        person voluntarily has blood drawn and used for transfusions and/or made
        into biopharmaceutical medications by a process called fractionation
        (separation of whole blood components). Donation may be of whole blood,
        or of specific components directly (apheresis). Blood banks often
        participate in the collection process as well as the procedures that
        follow it. Today in the developed world, most blood donors are unpaid
        volunteers who donate blood for a community supply. In some countries,
        established supplies are limited and donors usually give blood when
        family or friends need a transfusion (directed donation). Many donors
        donate for several reasons, such as a form of charity, general awareness
        regarding the demand for blood, increased confidence in oneself, helping
        a personal friend or relative, and social pressure. Despite the many
        reasons that people donate, not enough potential donors actively donate.
        However, this is reversed during disasters when blood donations
        increase, often creating an excess supply that will have to be later
        discarded. In countries that allow paid donation some people are paid,
        and in some cases there are incentives other than money such as paid
        time off from work. People can also have blood drawn for their own
        future use (autologous donation). Donating is relatively safe, but some
        donors have bruising where the needle is inserted or may feel faint.
        Potential donors are evaluated for anything that might make their blood
        unsafe to use. The screening includes testing for diseases that can be
        transmitted by a blood transfusion, including HIV and viral hepatitis.
        The donor must also answer questions about medical history and take a
        short physical examination to make sure the donation is not hazardous to
        his or her health. How often a donor can donate varies from days to
        months based on what component they donate and the laws of the country
        where the donation takes place. For example, in the United States,
        donors must wait 56 days (eight weeks) between whole-blood donations but
        only seven days between platelet apheresis donations[1] and twice per
        seven-day period in plasmapheresis. The amount of blood drawn and the
        methods vary. The collection can be done manually or with automated
        equipment that takes only specific components of the blood. Most of the
        components of blood used for transfusions have a short shelf life, and
        maintaining a constant supply is a persistent problem. This has led to
        some increased interest in autotransfusion, whereby a patient's blood is
        salvaged during surgery for continuous reinfusion—or alternatively, is
        "self-donated" prior to when it will be needed. (Generally, the notion
        of "donation" does not refer to giving to one's self, though in this
        context it has become somewhat acceptably idiomatic.) Contents 1 History
        2 Types of donation 3 Screening 3.1 Recipient safety 3.2 Donor safety
        3.3 Blood testing 4 Obtaining the blood 4.1 Site preparation and drawing
        blood 4.2 Whole blood 4.3 Apheresis 5 Recovery and time between
        donations 6 Complications 7 Storage, supply and demand 7.1 Storage and
        blood shelf life 7.2 Demand for blood 7.3 Donation levels 8 Donator's
        incentive and deterrence 8.1 Donor health benefits 8.2 Donor
        compensation 9 See also 10 References 11 Further reading History Charles
        Richard Drew (June 3, 1904 – April 1, 1950) was an American surgeon and
        medical researcher. He researched in the field of blood transfusions,
        developing improved techniques for blood storage, and applied his expert
        knowledge to developing large-scale blood banks early in World War II.
        This allowed medics to save thousands of lives of the Allied forces. As
        the most prominent African American in the field, Drew protested against
        the practice of racial segregation in the donation of blood, as it
        lacked scientific foundation, and resigned his position with the
        American Red Cross, which maintained the policy until 1950.[citation
        needed] Types of donation A blood collection bus (bloodmobile) from
        Japanese Red Cross at Myōdani Station in Suma-ku, Kobe, Hyōgo
        Prefecture, Japan Blood donations are divided into groups based on who
        will receive the collected blood.[2] An 'allogeneic' (also called
        'homologous') donation is when a donor gives blood for storage at a
        blood bank for transfusion to an unknown recipient. A 'directed'
        donation is when a person, often a family member, donates blood for
        transfusion to a specific individual.[3] Directed donations are
        relatively rare when an established supply exists.[4] A 'replacement
        donor' donation is a hybrid of the two and is common in developing
        countries.[5] In this case, a friend or family member of the recipient
        donates blood to replace the stored blood used in a transfusion,
        ensuring a consistent supply. When a person has blood stored that will
        be transfused back to the donor at a later date, usually after surgery,
        that is called an 'autologous donation'.[6] Blood that is used to make
        medications can be made from allogeneic donations or from donations
        exclusively used for manufacturing.[7] Blood is sometimes collected
        using similar methods for therapeutic phlebotomy, similar to the ancient
        practice of bloodletting, which is used to treat conditions such as
        hereditary hemochromatosis or polycythemia vera. This blood is sometimes
        treated as a blood donation, but may be immediately discarded if it
        cannot be used for transfusion or further manufacturing.[citation
        needed] The actual process varies according to the laws of the country,
        and recommendations to donors vary according to the collecting
        organization.[8][9][10] The World Health Organization gives
        recommendations for blood donation policies,[11] but in developing
        countries many of these are not followed. For example, the recommended
        testing requires laboratory facilities, trained staff, and specialized
        reagents, all of which may not be available or too expensive in
        developing countries.[12] An event where donors come to donate
        allogeneic blood is sometimes called a 'blood drive' or a 'blood donor
        session'. These can occur at a blood bank, but they are often set up at
        a location in the community such as a shopping center, workplace,
        school, or house of worship.[13] Screening Donors are typically required
        to give consent for the process, and meet a certain criteria such as
        weight and hemoglobin levels, and this requirement means minors cannot
        donate without permission from a parent or guardian.[14] In some
        countries, answers are associated with the donor's blood, but not name,
        to provide anonymity; in others, such as the United States, names are
        kept to create lists of ineligible donors.[15] If a potential donor does
        not meet these criteria, they are 'deferred'. This term is used because
        many donors who are ineligible may be allowed to donate later. Blood
        banks in the United States may be required to label the blood if it is
        from a therapeutic donor, so some do not accept donations from donors
        with any blood disease.[16] Others, such as the Australian Red Cross
        Blood Service, accept blood from donors with hemochromatosis. It is a
        genetic disorder that does not affect the safety of the blood.[17] The
        donor's race or ethnic background is sometimes important since certain
        blood types, especially rare ones, are more common in certain ethnic
        groups.[18] Historically, in the United States donors were segregated or
        excluded on race, religion, or ethnicity, but this is no longer a
        standard practice.[19][20] Recipient safety Blood donation policies for
        men who have sex with men -Men who have sex with men may donate blood;
        No deferral -Men who have sex with men may donate blood; Temporary
        deferral -Men who have sex with men may not donate blood; Permanent
        deferral -No Data Blood donation policies for female sex partners of men
        who have sex with men -Female sex partners of men who have sex with men
        may donate blood; No deferral -Female sex partners of men who have sex
        with men may donate blood; Temporary deferral -Female sex partners of
        men who have sex with men may not donate blood; Permanent deferral -No
        Data Donors are screened for health risks that could make the donation
        unsafe for the recipient. Some of these restrictions are controversial,
        such as restricting donations from men who have sex with men (MSM)
        because of the risk of transmitting HIV.[21] In 2011, the UK (excluding
        Northern Ireland) reduced its blanket ban on MSM donors to a narrower
        restriction which only prevents MSM from donating blood if they have had
        sex with other men within the past year.[22] A similar change was made
        in the US in late 2015 by the FDA.[23] In 2017, the UK and US further
        reduced their restrictions to three months.[24] Autologous donors are
        not always screened for recipient safety problems since the donor is the
        only person who will receive the blood.[25] Since the donated blood may
        be given to pregnant women or women of child-bearing age, donors taking
        teratogenic (birth defect-causing) medications are deferred. These
        medications include acitretin, etretinate, isotretinoin, finasteride,
        and dutasteride.[26] Donors are examined for signs and symptoms of
        diseases that can be transmitted in a blood transfusion, such as HIV,
        malaria, and viral hepatitis. Screening may include questions about risk
        factors for various diseases, such as travel to countries at risk for
        malaria or variant Creutzfeldt–Jakob disease (vCJD). These questions
        vary from country to country. For example, while blood centers in Québec
        and the rest of Canada, Poland, and many other places defer donors who
        lived in the United Kingdom for risk of vCJD,[27][28] donors in the
        United Kingdom are only restricted for vCJD risk if they have had a
        blood transfusion in the United Kingdom.[29] Donor safety The donor is
        also examined and asked specific questions about their medical history
        to make sure that donating blood is not hazardous to their health. The
        donor's hematocrit or hemoglobin level is tested to make sure that the
        loss of blood will not make them anemic, and this check is the most
        common reason that a donor is ineligible.[30] Accepted hemoglobin levels
        for blood donations, by the American Red Cross, is 12.5g/dL (for
        females) and 13.0g/dL (for males) to 20.0g/dL, anyone with a higher or
        lower hemoglobin level cannot donate.[31] Pulse, blood pressure, and
        body temperature are also evaluated. Elderly donors are sometimes also
        deferred on age alone because of health concerns.[32] In addition to
        age, weight and height are important factors when considering the
        eligibility for donors. For example, the American Red Cross requires a
        donor to be 110 pounds (50 kg) or more for whole blood and platelet
        donation and at least 130 pounds (59 kg) (males) and at least 150 pounds
        (68 kg) (females) for power red donations.[33] The safety of donating
        blood during pregnancy has not been studied thoroughly, and pregnant
        women are usually deferred until six weeks after the pregnancy.[34]
        Blood testing A patient's health screening report given after a blood
        donation. The donor's blood type must be determined if the blood will be
        used for transfusions. The collecting agency usually identifies whether
        the blood is type A, B, AB, or O and the donor's Rh (D) type and will
        screen for antibodies to less common antigens. More testing, including a
        crossmatch, is usually done before a transfusion. Type O negative is
        often cited as the "universal donor"[35] but this only refers to red
        cell and whole blood transfusions. For plasma and platelet transfusions
        the system is reversed: AB positive is the universal platelet donor type
        while both AB positive and AB negative are universal plasma donor
        types.[36][37] Most blood is tested for diseases, including some
        STDs.[38] The tests used are high-sensitivity screening tests and no
        actual diagnosis is made. Some of the test results are later found to be
        false positives using more specific testing.[39] False negatives are
        rare, but donors are discouraged from using blood donation for the
        purpose of anonymous STD screening because a false negative could mean a
        contaminated unit. The blood is usually discarded if these tests are
        positive, but there are some exceptions, such as autologous donations.
        The donor is generally notified of the test result.[40] Donated blood is
        tested by many methods, but the core tests recommended by the World
        Health Organization are these four: Hepatitis B surface antigen Antibody
        to hepatitis C Antibody to HIV, usually subtypes 1 and 2 Serologic test
        for syphilis The WHO reported in 2006 that 56 out of 124 countries
        surveyed did not use these basic tests on all blood donations.[12] A
        variety of other tests for transfusion transmitted infections are often
        used based on local requirements. Additional testing is expensive, and
        in some cases the tests are not implemented because of the cost.[41]
        These additional tests include other infectious diseases such as West
        Nile fever[42] and babesiosis.[43] Sometimes multiple tests are used for
        a single disease to cover the limitations of each test. For example, the
        HIV antibody test will not detect a recently infected donor, so some
        blood banks use a p24 antigen or HIV nucleic acid test in addition to
        the basic antibody test to detect infected donors. Cytomegalovirus is a
        special case in donor testing in that many donors will test positive for
        it.[44] The virus is not a hazard to a healthy recipient, but it can
        harm to infants[45] and other recipients with weak immune systems.[44]
        Obtaining the blood A US Navy sailor donating blood A donor's arm at
        various stages of donation. The two photographs on the left show a blood
        pressure cuff being used as a tourniquet. There are two main methods of
        obtaining blood from a donor. The most frequent is to simply take the
        blood from a vein as whole blood. This blood is typically separated into
        parts, usually red blood cells and plasma, since most recipients need
        only a specific component for transfusions. A typical donation is 450
        millilitres (or approximately one U.S. pint)[46] of whole blood, though
        500 millilitre donations are also common. Historically, blood donors in
        India would donate only 250 or 350 millilitre and donors in the People's
        Republic of China would donate only 200 millilitres, though larger 300
        and 400 millilitre donations have become more common.[47] The other
        method is to draw blood from the donor, separate it using a centrifuge
        or a filter, store the desired part, and return the rest to the donor.
        This process is called apheresis, and it is often done with a machine
        specifically designed for this purpose. This process is especially
        common for plasma and platelets.[citation needed] For direct
        transfusions a vein can be used but the blood may be taken from an
        artery instead.[48] In this case, the blood is not stored, but is pumped
        directly from the donor into the recipient. This was an early method for
        blood transfusion and is rarely used in modern practice.[49] It was
        phased out during World War II because of problems with logistics, and
        doctors returning from treating wounded soldiers set up banks for stored
        blood when they returned to civilian life.[50] Site preparation and
        drawing blood File:Blood draw 16 second.webm Insertion of a butterfly
        needle into a vein to begin the blood draw process. The blood is drawn
        from a large arm vein close to the skin, usually the median cubital vein
        on the inside of the elbow. The skin over the blood vessel is cleaned
        with an antiseptic such as iodine or chlorhexidine[51] to prevent skin
        bacteria from contaminating the collected blood[51] and also to prevent
        infections where the needle pierced the donor's skin.[52] A large[53]
        needle (16 to 17 gauge) is used to minimize shearing forces that may
        physically damage red blood cells as they flow through the needle.[54] A
        tourniquet is sometimes wrapped around the upper arm to increase the
        pressure of the blood in the arm veins and speed up the process. The
        donor may also be prompted to hold an object and squeeze it repeatedly
        to increase the blood flow through the vein. A mechanical tray agitates
        the bag to mix the blood with anticoagulants and prevent clotting. Whole
        blood Further information: Whole blood The most common method is
        collecting the blood from the donor's vein into a container. The amount
        of blood drawn varies from 200 millilitres to 550 millilitres depending
        on the country, but 450–500 millilitres is typical.[44] The blood is
        usually stored in a flexible plastic bag that also contains sodium
        citrate, phosphate, dextrose, and adenine. This combination keeps the
        blood from clotting and preserves it during storage up to 42
        days.[55][56][57] Other chemicals are sometimes added during processing.
        The plasma from whole blood can be used to make plasma for transfusions
        or it can also be processed into other medications using a process
        called fractionation. This was a development of the dried plasma used to
        treat the wounded during World War II and variants on the process are
        still used to make a variety of other medications.[58][59] Apheresis
        Main articles: Apheresis, Erythrocytapheresis, Plasmapheresis, and
        Plateletpheresis Platelets collected by using apheresis at an American
        Red Cross donation center. Apheresis is a blood donation method where
        the blood is passed through an apparatus that separates out one
        particular constituent and returns the remainder to the donor. Usually
        the component returned is the red blood cells, the portion of the blood
        that takes the longest to replace. Using this method an individual can
        donate plasma or platelets much more frequently than they can safely
        donate whole blood.[60] These can be combined, with a donor giving both
        plasma and platelets in the same donation. Platelets can also be
        separated from whole blood, but they must be pooled from multiple
        donations. From three to ten units of whole blood are required for a
        therapeutic dose.[61] Plateletpheresis provides at least one full dose
        from each donation.[citation needed] During a platelet donation, the
        blood is drawn from the patient and the platelets are separated from the
        other blood components. The remainder of the blood, red blood cells,
        plasma, and white blood cells are returned to the patient. This process
        is completed several times for a period of up to two hours to collect a
        single donation.[62] Plasmapheresis is frequently used to collect source
        plasma that is used for manufacturing into medications much like the
        plasma from whole blood. Plasma collected at the same time as
        plateletpheresis is sometimes called concurrent plasma. Apheresis is
        also used to collect more red blood cells than usual in a single
        donation (commonly known as "double reds") and to collect white blood
        cells for transfusion.[63][64] A relatively large needle is used for
        blood donations. Recovery and time between donations Donors are usually
        kept at the donation site for 10–15 minutes after donating since most
        adverse reactions take place during or immediately after the
        donation.[65] Blood centers typically provide light refreshments, such
        as orange juice and cookies, or a lunch allowance to help the donor
        recover.[66] The needle site is covered with a bandage and the donor is
        directed to keep the bandage on for several hours.[46] In hot climates,
        donors are advised to avoid dehydration (strenuous exercise and games,
        alcohol) until a few hours after donation.[citation needed] Donated
        plasma is replaced after 2–3 days.[67] Red blood cells are replaced by
        bone marrow into the circulatory system at a slower rate, on average 36
        days in healthy adult males. In one study, the range was 20 to 59 days
        for recovery.[68] These replacement rates are the basis of how
        frequently a donor can donate blood.[citation needed] Plasmapheresis and
        plateletpheresis donors can donate much more frequently because they do
        not lose significant amounts of red cells. The exact rate of how often a
        donor can donate differs from country to country. For example,
        plasmapheresis donors in the United States are allowed to donate large
        volumes twice a week and could nominally donate 83 litres (about 22
        gallons) in a year, whereas the same donor in Japan may only donate
        every other week and could only donate about 16 litres (about 4 gallons)
        in a year.[69] Iron supplementation decreases the rates of donor
        deferral due to low hemoglobin, both at the first donation visit and at
        subsequent donations. Iron-supplemented donors have higher hemoglobin
        and iron stores. On the other hand, iron supplementation frequently
        causes diarrhea, constipation and epigastric abdominal discomfort. The
        long-term effects of iron supplementation without measurement of iron
        stores are unknown.[70] Complications Donors are screened for health
        problems that would put them at risk for serious complications from
        donating. First-time donors, teenagers, and women are at a higher risk
        of a reaction.[71][72] One study showed that 2% of donors had an adverse
        reaction to donation.[73] Most of these reactions are minor. A study of
        194,000 donations found only one donor with long-term complications.[74]
        In the United States, a blood bank is required to report any death that
        might possibly be linked to a blood donation. An analysis of all reports
        from October 2008 to September 2009 evaluated six events and found that
        five of the deaths were clearly unrelated to donation, and in the
        remaining case they found no evidence that the donation was the cause of
        death.[75] Bruising three days after donation Hypovolemic reactions can
        occur because of a rapid change in blood pressure. Fainting is generally
        the worst problem encountered.[76] The process has similar risks to
        other forms of phlebotomy. Bruising of the arm from the needle insertion
        is the most common concern. One study found that less than 1% of donors
        had this problem.[77] A number of less common complications of blood
        donation are known to occur. These include arterial puncture, delayed
        bleeding, nerve irritation, nerve injury, tendon injury,
        thrombophlebitis, and allergic reactions.[78] Donors sometimes have
        adverse reactions to the sodium citrate used in apheresis collection
        procedures to keep the blood from clotting. Since the anticoagulant is
        returned to the donor along with blood components that are not being
        collected, it can bind the calcium in the donor's blood and cause
        hypocalcemia.[79] These reactions tend to cause tingling in the lips,
        but may cause convulsions, seizure, hypertension, or more serious
        problems.[80] Donors are sometimes given calcium supplements during the
        donation to prevent these side effects.[81] In apheresis procedures, the
        red blood cells are returned. If this is done manually and the donor
        receives the blood from a different donor, a transfusion reaction can
        take place. Manual apheresis is extremely rare in the developed world
        because of this risk and automated procedures are as safe as whole blood
        donations.[82] The final risk to blood donors is from equipment that has
        not been properly sterilized.[83] In most cases, the equipment that
        comes in direct contact with blood is discarded after use.[84] Re-used
        equipment was a significant problem in China in the 1990s, and up to
        250,000 blood plasma donors may have been exposed to HIV from shared
        equipment.[85][86][87] Storage, supply and demand Whole blood is often
        separated, using a centrifuge, into components for storage and
        transportation Storage and blood shelf life Main article: Blood bank The
        collected blood is usually stored in a blood bank as separate
        components, and some of these have short shelf lives. There are no
        storage methods to keep platelets for extended periods of time, though
        some were being studied as of 2008.[88] The longest shelf life used for
        platelets is seven days.[89] Red blood cells (RBC), the most frequently
        used component, have a shelf life of 35–42 days at refrigerated
        temperatures.[90][91] For (relatively rare) long-term storage
        applications, this can be extended by freezing the blood with a mixture
        of glycerol, but this process is expensive and requires an extremely
        cold freezer for storage.[44] Plasma can be stored frozen for an
        extended period of time and is typically given an expiration date of one
        year and maintaining a supply is less of a problem.[92] Demand for blood
        The American Red Cross states that in the United States, someone needs
        blood every two seconds, and someone needs platelets every thirty
        seconds.[93] Not to mention, there isn't a consistent demand for each
        blood type. One type of blood being in stock does not guarantee that
        another type is. Blood banks may have some units in stock but lack
        others, ultimately causing the patients that need units for specific
        blood types to have delayed or canceled procedures.[94] Additionally,
        every year there is an increase of around 5-7% for transfusions without
        an increase of donors to balance it as well as a growing population of
        elderly people that will need more transfusions in the future without a
        predicted increase in donations[95] to reflect those growing numbers.
        This was supported in 1998 where blood donations to the Red Cross
        increased to 8%, totaling 500,000 units but hospitals' need for
        donations increased by 11%.[96] Blood donations tend to always be high
        in demand with numerous accounts repeatedly stating periodic shortages
        over the decades.[97] However, this trend is disrupted during national
        disasters. The trend demonstrates that people are donating the most
        during catastrophes when, arguably, donations are not as needed compared
        to periods without disasters.[97] From 1988 to 2013, it has been
        reported that during every national disaster, there was a surplus of
        donations; a surplus that consisted of over 100 units.[98] One of the
        most notable examples of this pattern was the September 11th attacks. A
        study observed that compared to the four weeks before September 11,
        there was an estimated increase of 18,700 donations from first-time
        donors for the first week after the attack: 4,000 was the average of
        donations from first-time donors before the attack which increased to
        about 22,700 donations; while repeat donors increased their donations by
        10,000 per week: initially, donations were estimated to be around 16,400
        which increased to 26,400 donations after September 11.[99] Therefore,
        in the first week after the attack on 9/11, there was an overall
        estimated 28,700 increase in donations compared to the average weekly
        donations made four weeks prior to the attack. Increases in donations
        were observed in all blood donation centers, beginning on the day of the
        attack.[99] While blood donations were above average after the first few
        weeks following 9/11, the number of donations fell from an estimated
        49,000 donations in the first week to 26,000-28,000 donations between
        the second and fourth weeks after 9/11.[99][97] Despite the substantial
        increase of donors, the rate that first-time donors would become repeat
        donors were the same before and after the attack.[99] The limited
        storage time means that it is difficult to have a stockpile of blood to
        prepare for a disaster. The subject was discussed at length after the
        September 11 attacks in the United States, and the consensus was that
        collecting during a disaster was impractical and that efforts should be
        focused on maintaining an adequate supply at all times.[100] Blood
        centers in the U.S. often have difficulty maintaining even a three-day
        supply for routine transfusion demands.[101] Donation levels The World
        Health Organization (WHO) recognizes World Blood Donor Day on 14 June
        each year to promote blood donation. This is the birthday of Karl
        Landsteiner, the scientist who discovered the ABO blood group
        system.[102] The theme of the 2012 World Blood Donor Day campaign,
        "Every blood donor is a hero" focuses on the idea that everyone can
        become a hero by giving blood. Based on data reported by 180 countries
        between 2011 and 2013, the WHO estimated that approximately 112.5
        million units of blood were being collected annually.[103] In the United
        States it is estimated that 111 million citizens are eligible blood
        donors,[104] or 37% of the population.[105] However less than 10% of the
        37% eligible blood donors donate annually.[105] In the UK the NHS
        reports blood donation levels at "only 4%"[106] while in Canada the rate
        is 3.5%.[107] Donator's incentive and deterrence Multiple studies have
        shown that the main reason people donate is due to selflessness,
        charity, general awareness regarding the demand for blood, increased
        confidence in oneself, helping a personal friend/relative, and social
        pressure.[108] On the other hand, lack of blood donations can occur due
        to fear, lack of faith in the medical professionals, inconvenience, and
        the lack of consideration for donating.[109] Pathologist Leo McCarthy
        states that blood shortages routinely occur between July 4 and Labor day
        and between Christmas and New Year.[95] Donor health benefits In
        patients prone to iron overload, blood donation prevents the
        accumulation of toxic quantities.[110] Donating blood may reduce the
        risk of heart disease for men, but the link has not been firmly
        established and may be from selection bias because donors are screened
        for health problems.[111][112] Research published in 2012 demonstrated
        that in patients with metabolic syndrome, repeated blood donation is
        effective in reducing blood pressure, blood glucose, HbA1c, low-density
        lipoprotein/high-density lipoprotein ratio, and heart rate.[113] Donor
        compensation UK awards for 50, 25 and 100 donations Ruby award from the
        Singapore Red Cross for 75 voluntary donations Monument to blood donors
        in Ávila, Spain The World Health Organization set a goal in 1997 for all
        blood donations to come from unpaid volunteer donors, but as of 2006,
        only 49 of 124 countries surveyed had established this as a
        standard.[12] Some countries, such as Tanzania, have made great strides
        in moving towards this standard, with 20 percent of donors in 2005 being
        unpaid volunteers and 80 percent in 2007, but 68 of 124 countries
        surveyed by WHO had made little or no progress.[5] Most plasmapheresis
        donors in the United States and Austria and Germany are still paid for
        their donations.[114] Donors are now paid between $25 and $50 per
        donation.[115] In some countries, for example Australia, Brazil and
        Great Britain, it is illegal to receive any compensation, monetary or
        otherwise, for the donation of blood or other human tissues.[116][117]
        Regular donors are often given some sort of non-monetary recognition.
        Time off from work is a common benefit.[118] For example, in Italy,
        blood donors receive the donation day as a paid holiday from work.[119]
        Blood centers will also sometimes add incentives such as assurances that
        donors would have priority during shortages, free T-shirts, first aid
        kits, windshield scrapers, pens, and similar trinkets. There are also
        incentives for the people who recruit potential donors, such as prize
        drawings for donors and rewards for organizers of successful
        drives.[120] Recognition of dedicated donors is common. For example, the
        Singapore Red Cross Society presents awards for voluntary donors who
        have made a certain number of donations under the Blood Donor
        Recruitment Programme starting with a "bronze award" for 25
        donations.[121] The government of Malaysia also offers free outpatient
        and hospitalization benefits for blood donors, for example, 4 months of
        free outpatient treatment and hospitalization benefits after every
        donation.[122] In Poland, after donating a specific amount of blood (18
        litres for men and 15 for women), a person is gifted with the title of
        "Distinguished Honorary Blood Donor" as well as a medal. In addition, a
        popular privilege in larger Polish cities is the right to free use of
        public transport, but the conditions for obtaining a privilege may vary
        depending on the city. During the COVID-19 pandemic, many US blood
        centers advertised free COVID-19 antibody testing as an incentive to
        donate, however these antibody tests were also useful for blood centers
        in determining which donors could be flagged for convalescent plasma
        donations.[123][124][125] Most allogeneic blood donors donate as an act
        of charity and do not expect to receive any direct benefit from the
        donation.[126] The sociologist Richard Titmuss, in his 1970 book The
        Gift Relationship: From Human Blood to Social Policy, compared the
        merits of the commercial and non-commercial blood donation systems of
        the US and the UK, coming down in favor of the latter. The book became a
        bestseller in the US, resulting in legislation to regulate the private
        market in blood.[127] The book is still referenced in modern debates
        about turning blood into a commodity.[128] The book was republished in
        1997 and the same ideas and principles are applied to analogous donation
        programs, such as organ donation and sperm donation.[129] See also Blood
        bank#History (history of blood donation) Blood donation restrictions on
        men who have sex with men Blood substitute James Harrison (blood donor)
        List of blood donation agencies World Blood Donor Day Xenotransfusion
        References "Frequently Asked Questions About Donating Blood". American
        Red Cross Blood Services. Retrieved 2021-04-15. M. E. Brecher, Editor
        (2005), AABB Technical Manual, 15th edition, Bethesda, MD: AABB, ISBN
        1-56395-196-7, pp. 98–103 "Directed Donation". Mayo Clinic. Archived
        from the original on 2008-05-24. Retrieved 2008-06-25. Wales PW, Lau W,
        Kim PC (May 2001). "Directed blood donation in pediatric general
        surgery: Is it worth it?". J. Pediatr. Surg. 36 (5): 722–25.
        doi:10.1053/jpsu.2001.22945. PMID 11329574. T. Brown "Strengthening
        Blood Systems In Africa: Progress Under PEPFAR and Remaining Challenges"
        AABB News. April 1998: p. 30 "Autologous (self-donated) Blood as an
        Alternative to Allogeneic (donor-donated) Blood Transfusion". AABB.
        Archived from the original on 2008-06-12. Retrieved 2008-06-25.
        "Recovered Plasma". AABB. Archived from the original on 2008-06-12.
        Retrieved 2008-06-25. "Giving Blood -> What to Expect". Australian Red
        Cross Blood Service. Archived from the original on 2007-08-29. Retrieved
        2007-10-06. "The Donation Experience". Canadian Blood Services. Archived
        from the original on 2007-02-03. Retrieved 2006-12-17. "Tips for a Good
        Donation Experience". American Red Cross. Archived from the original on
        2006-12-14. Retrieved 2006-12-17. "WHO Blood Safety and Donation". World
        Health Organization. Archived from the original on 2008-06-29. Retrieved
        2008-06-01. "World Blood Donor Day 2006". World Health Organization.
        Archived from the original on 2008-06-17. Retrieved 2008-06-26.
        "Sponsoring a Blood Drive". American Red Cross. Archived from the
        original on 2008-05-26. Retrieved 2008-06-25. "Parental consent form"
        (PDF). Australian Red Cross Blood Service. Retrieved 2008-06-01. "FDA
        regulations on donor deferral". US Food and Drug Administration.
        Archived from the original on 2008-05-14. Retrieved 2008-06-01.
        "Variances for Blood Collection from Individuals with Hereditary
        Hemochromatosis". US Food and Drug Administration. Archived from the
        original on 2007-07-08. Retrieved 2007-07-18. "Hereditary
        Hemochromatosis: Perspectives of Public Health, Medical Genetics, and
        Primary Care". CDC Office of Public Health Genomics. Archived from the
        original on 2008-03-08. Retrieved 2008-06-03. Severo, Richard
        (1990-01-13). "Donors' Races to Be Sought To Identify Rare Blood Types".
        The New York Times. Archived from the original on 2009-03-03. Retrieved
        2008-06-01. "Red Gold, Innovators and Pioneers". Public Broadcasting
        Service (United States). Archived from the original on 2008-05-17.
        Retrieved 2008-06-01. "How Science Students Helped End Segregated Blood
        Banks". National Center For Science Education (United States).
        2015-08-05. Archived from the original on 2017-11-07. Retrieved
        2017-11-05. "Drug Agency Reaffirms Ban on Gay Men Giving Blood". The New
        York Times. 2007-05-24. Archived from the original on 2013-05-24.
        Retrieved 2009-03-26. "HIV charities welcome the lifting of lifetime ban
        on gay men donating blood". National Aids Trust. 2011-09-08. Archived
        from the original on 2014-02-02. Retrieved 2014-01-31. "Revised
        Recommendations for Reducing the Risk of Human Immunodeficiency Virus
        Transmission by Blood and Blood Products - Questions and Answers". US
        Food and Drug Administration. Archived from the original on 2016-03-30.
        Retrieved 2016-03-30. "The rules on blood donation in England change on
        28th November". NHS Blood and Transplant. 2017-11-28. Archived from the
        original on 2019-10-15. Retrieved 2019-10-21. Heim MU, Mempel W (1991).
        "[The need for thorough infection screening in donors of autologous
        blood]". Beitr Infusionsther (in German). 28: 313–16. PMID 1725645.
        "Avodart consumer information". US Food and Drug Administration.
        Archived from the original on May 9, 2009. Retrieved 2008-06-01. "Donor
        Qualification criteria". Héma-Québec, Canada. Archived from the original
        on 2006-11-08. Retrieved 2006-12-17. "Permanent exclusion criteria /
        Dyskwalifikacja stała" (in Polish). RCKiK Warszawa. Archived from the
        original on August 30, 2009. Retrieved 2010-03-03. "Guidelines for UK
        Blood Services". UK Blood and Tissue Services. Archived from the
        original on 2008-05-15. Retrieved 2008-06-01. Gómez-Simón A;
        Navarro-Núñez L; Pérez-Ceballos E; et al. (Jun 2007). "Evaluation of
        four rapid methods for hemoglobin screening of whole blood donors in
        mobile collection settings". Transfus. Apher. Sci. 36 (3): 235–42.
        doi:10.1016/j.transci.2007.01.010. PMID 17556020. "Iron Information for
        All Blood Donors". www.redcrossblood.org. Retrieved 2020-10-20. Goldman
        M, Fournier E, Cameron-Choi K, Steed T (May 2007). "Effect of changing
        the age criteria for blood donors". Vox Sang. 92 (4): 368–72.
        doi:10.1111/j.1423-0410.2007.00897.x. PMID 17456161. S2CID 36493554.
        "Eligibility Requirements". www.redcrossblood.org. Retrieved 2020-10-20.
        "Donating – Frequently Asked Questions". Blood Bank of Alaska. Archived
        from the original on 2008-06-06. Retrieved 2008-06-01. "Blood Type
        Test". WebMD.com. Archived from the original on 2008-05-29. Retrieved
        2008-06-01. "Plasma fact sheet" (PDF). American Red Cross. Archived from
        the original (PDF) on 2009-03-26. "Right Type, Right Time". Bhattacharya
        P; Chandra PK; Datta S; et al. (Jul 2007). "Significant increase in HBV,
        HCV, HIV, and syphilis infections among blood donors in West Bengal,
        Eastern India 2004–2005: exploratory screening reveals high frequency of
        occult HBV infection". World J. Gastroenterol. 13 (27): 3730–33.
        doi:10.3748/wjg.v13.i27.3730. PMC 4250646. PMID 17659734. Archived from
        the original on 2008-12-29. "Testing of Donor Blood for infectious
        disease". AABB. Archived from the original on 2008-05-09. Retrieved
        2008-06-25. R. Miller; P.E. Hewitt; R. Warwick; M.C. Moore; B. Vincent
        (1998). "Review of counselling in a transfusion service: the London (UK)
        experience". Vox Sang. 74 (3): 133–39.
        doi:10.1046/j.1423-0410.1998.7430133.x. PMID 9595639. S2CID 24514380.
        "Advisory Committee on MSBTO, 28 June 2005" (PDF). Archived from the
        original (PDF) on 28 May 2008. Retrieved 2008-06-01. "Precautionary West
        Nile virus blood sample testing". Héma-Québec, Canada. Archived from the
        original on 2007-09-13. Retrieved 2006-12-17. "FDA approves first tests
        to screen for tickborne parasite in whole blood and plasma to protect
        the U.S. blood supply" (Press release). FDA. 6 March 2018. Archived from
        the original on 7 March 2018. Retrieved 6 March 2018. While babesiosis
        is both preventable and treatable, until today, there was no way to
        screen for infections amongst blood donors "Circular of Information for
        use of Blood and Blood Products" (PDF). AABB, ARC, America's Blood
        Centers. Archived from the original (PDF) on 2009-10-07. "Red blood cell
        transfusions in newborn infants: Revised guidelines". Canadian
        Paediatric Society (CPS). Archived from the original on 2007-02-03.
        Retrieved 2007-02-02. "Blood donation: What to expect". Mayo Clinic.
        Archived from the original on 2008-12-04. Retrieved 2008-12-03. Jingxing
        Wang; Nan Guo (corresponding); et al. (December 2010). "Who donates
        blood at five ethnically and geographically diverse blood centers in
        China in 2008". Transfusion. 50 (12): 2686–94.
        doi:10.1111/j.1537-2995.2010.02722.x. PMID 20553435. S2CID 205723043.
        Sagi E, Eyal F, Armon Y, Arad I, Robinson M (Nov 1981). "Exchange
        transfusion in newborns via a peripheral artery and vein". Eur. J.
        Pediatr. 137 (3): 283–84. doi:10.1007/BF00443258. PMID 7318840. S2CID
        23219586. "Blood on the Hoof". Public Broadcasting Service. Archived
        from the original on 2008-06-04. Retrieved 2008-06-25. "ISBT Quarterly
        Newsletter, June 2006, "A History of Fresh Blood", p. 15" (PDF).
        International Society of Blood Transfusion (ISBT/SITS). Archived from
        the original (PDF) on 2008-08-03. Retrieved 2008-07-31. Lee CK, Ho PL,
        Chan NK, Mak A, Hong J, Lin CK (Oct 2002). "Impact of donor arm skin
        disinfection on the bacterial contamination rate of platelet
        concentrates". Vox Sang. 83 (3): 204–08.
        doi:10.1046/j.1423-0410.2002.00219.x. PMID 12366760. S2CID 19946631. M.
        L. Turgeon (2004). Clinical Hematology: Theory and Procedures (fourth
        ed.). Lippincott Williams & Wilkins. p. 30. ISBN 978-0-7817-5007-3.
        Retrieved 2008-06-21. One major manufacturer of collection sets uses a
        16 gauge (1.651 mm) size "Blood banking laboratory supplies" (PDF).
        Genesis BPS. Archived from the original (PDF) on 2008-06-25. Retrieved
        2008-06-01. "What is Hemolysis?" (PDF). Becton-Dickinson. Archived (PDF)
        from the original on 2008-06-25. Retrieved 2008-06-01. Akerblom O,
        Kreuger A (1975). "Studies on citrate-phosphate-dextrose (CPD) blood
        supplemented with adenine". Vox Sang. 29 (2): 90–100.
        doi:10.1111/j.1423-0410.1975.tb00484.x. PMID 238338. S2CID 9785373.
        Sugita, Yoshiki; Simon, Ernest R. (1965). "The Mechanism of Action of
        Adenine in Red Cell Preservation*". Journal of Clinical Investigation.
        44 (4): 629–642. doi:10.1172/JCI105176. ISSN 0021-9738. PMC 292538. PMID
        14278179. Simon, Ernest R.; Chapman, Robert G.; Finch, Clement A.
        (1962). "Adenine in red cell preservation". Journal of Clinical
        Investigation. 41 (2): 351–359. doi:10.1172/JCI104489. ISSN 0021-9738.
        PMC 289233. PMID 14039291. "Plasma Equipment and Packaging, and
        Transfusion Equipment". Office of Medical History (OTSG). Archived from
        the original on 2017-06-09. Retrieved 2008-06-19. "Medicines derived
        from human plasma". Sanquin Blood Supply Foundation. Archived from the
        original on 2009-01-01. Retrieved 2008-06-01. Component Donation
        Archived 2009-10-11 at the Wayback Machine UK National Blood Service.
        Retrieved 2009-10-26 "Indications for Platelet Transfusion Therapy".
        Southeastern Community Blood Center. Archived from the original on
        2008-05-12. Retrieved 2008-06-10. "Platelet Donation". The American
        National Red Cross. Archived from the original on 2019-03-29. Retrieved
        2019-05-16. "Double Up to Save Lives". United Blood Services. Archived
        from the original on 2006-12-30. Retrieved 2007-02-23. "Double the
        Difference". American Red Cross (Greater Chesapeake and Potomac).
        Archived from the original on 2007-05-13. Retrieved 2007-02-23. Eder AF,
        Hillyer CD, Dy BA, Notari EP, Benjamin RJ (May 2008). "Adverse reactions
        to allogeneic whole blood donation by 16- and 17-year-olds". JAMA. 299
        (19): 2279–86. doi:10.1001/jama.299.19.2279. PMID 18492969. "Report on
        the promotion by Member States of voluntary unpaid blood donation"
        (PDF). Commission of the European Communities. Archived from the
        original (PDF) on 2008-08-03. Retrieved 2008-06-26. "Donating Apheresis
        and Plasma". Community Blood Center. Archived from the original on
        2008-07-04. Retrieved 2008-06-11. Pottgiesser T, Specker W, Umhau M,
        Dickhuth HH, Roecker K, Schumacher YO (2008). "Recovery of hemoglobin
        mass after blood donation". Transfusion. 48 (7): 1390–1397.
        doi:10.1111/j.1537-2995.2008.01719.x. PMID 18466177. S2CID 21814989.
        "Blood Products Advisory Committee, 12 December 2003". Archived from the
        original on 8 November 2008. Retrieved 2008-06-01. Smith GA, Fisher SA,
        Doree C, Di Angelantonio E, Roberts DJ (2014). "Oral or parenteral iron
        supplementation to reduce deferral, iron deficiency and/or anaemia in
        blood donors". Cochrane Database Syst Rev. 7 (7): CD009532.
        doi:10.1002/14651858.CD009532.pub2. PMID 24990381. A.F. Eder; C.D.
        Hillyer; B.A. Dy; E.P. Notari; R.J. Benjamin (May 2008). "Adverse
        reactions to allogeneic whole blood donation by 16- and 17-year-olds".
        JAMA. 299 (19): 2279–86. doi:10.1001/jama.299.19.2279. PMID 18492969.
        Yuan S, Gornbein J, Smeltzer B, Ziman AF, Lu Q, Goldfinger D (Jun 2008).
        "Risk factors for acute, moderate to severe donor reactions associated
        with multicomponent apheresis collections". Transfusion. 48 (6):
        1213–19. doi:10.1111/j.1537-2995.2008.01674.x. PMID 18346014. S2CID
        403463. "Adverse Effect of Blood Donation, Siriraj Experience" (PDF).
        American Red Cross. Archived from the original (PDF) on 2008-06-25.
        Retrieved 2008-06-01. B. Newman; S. Graves (2001). "A study of 178
        consecutive vasovagal syncopal reactions from the perspective of
        safety". Transfusion. 41 (12): 1475–79.
        doi:10.1046/j.1537-2995.2001.41121475.x. PMID 11778059. S2CID 23789257.
        "Fatalities Reported to FDA". US Food and Drug Administration. Archived
        from the original on 2011-01-02. Retrieved 2010-12-20. Wiltbank TB,
        Giordano GF, Kamel H, Tomasulo P, Custer B (May 2008). "Faint and
        prefaint reactions in whole-blood donors: an analysis of predonation
        measurements and their predictive value". Transfusion. 48 (9): 1799–808.
        doi:10.1111/j.1537-2995.2008.01745.x. PMID 18482188. S2CID 157599.
        Ranasinghe E, Harrison JF (Jun 2000). "Bruising following blood
        donation, its management and the response and subsequent return rates of
        affected donors". Transfus Med. 10 (2): 113–16.
        doi:10.1046/j.1365-3148.2000.00240.x. PMID 10849380. S2CID 46557010.
        Working Group on Complications Related to Blood Donation JF (2008).
        "Standard for Surveillance of Complications Related to Blood D Donation"
        (PDF). European Haemovigilance Network: 11. Archived from the original
        (PDF) on 2010-02-15. Bolan CD, Greer SE, Cecco SA, Oblitas JM, Rehak NN,
        Leitman SF (Sep 2001). "Comprehensive analysis of citrate effects during
        plateletpheresis in normal donors". Transfusion. 41 (9): 1165–71.
        doi:10.1046/j.1537-2995.2001.41091165.x. PMID 11552076. S2CID 22220301.
        Sorensen, BS; Johnsen, SP; Jorgensen, J. (Feb 2008). "Complications
        related to blood donation: A population-based study". Vox Sanguinis. 94
        (2): 132–37. doi:10.1111/j.1423-0410.2007.01000.x. PMID 18028259. S2CID
        35763171. "Jerome H. Holland Laboratory for the Biomedical Sciences
        Volunteer Research Blood Program (RBP)". American Red Cross. Archived
        from the original on 2008-03-15. Retrieved 2008-06-01. Wiltbank TB,
        Giordano GF; Giordano, Gerald F. (Jun 2007). "The safety profile of
        automated collections: an analysis of more than 1 million collections".
        Transfusion. 47 (6): 1002–05. doi:10.1111/j.1537-2995.2007.01224.x. PMID
        17524089. S2CID 19739978. Global AIDS Crisis: A Reference Handbook,
        Richard G. Marlink, Alison G. Kotin, p. 16 [1], ABC-CLIO "Blood Donor
        Information Leaflet". Irish Blood Transfusion Service. Archived from the
        original on 2007-11-19. Retrieved 2008-06-01. "Keeping China's blood
        supply free of HIV". US Embassy, Beijing. Archived from the original on
        2008-09-07. Retrieved 2008-06-01. Cohen J (Jun 2004). "HIV/AIDS in
        China. An unsafe practice turned blood donors into victims". Science.
        304 (5676): 1438–39. doi:10.1126/science.304.5676.1438. PMID 15178781.
        S2CID 45756186. Busby, Mattha (26 September 2019). "Contaminated blood
        whistleblower dies in US". The Guardian. Retrieved 26 September 2019.
        Beard, M.; Garwood, M.; Cookson, P.; Bashir, S.; Hancock, V.; Pergande,
        C.; Smith, K.; Turner, C.; Wiltshire, M.; Thomas, S.; Cardigan, R.
        (2006). "In Vitro Evaluation of Buffy Coat Derived Platelet Concentrates
        in SSP+ Platelet Storage Medium". Transfusion Medicine. 16: 26.
        doi:10.1111/j.1365-3148.2006.00694_4.x. S2CID 72452243. "Transfusion
        Handbook, summary information for Platelets". National Blood Transfusion
        Committee. Archived from the original on 2008-08-04. Retrieved
        2008-06-02. Lockwood WB, Hudgens RW, Szymanski IO, Teno RA, Gray AD (Nov
        2003). "Effects of rejuvenation and frozen storage on 42-day-old AS-3
        RBCs". Transfusion. 43 (11): 1527–32.
        doi:10.1046/j.1537-2995.2003.00551.x. PMID 14617310. S2CID 22694513.
        "Transfusion handbook, Summary information for Red Blood Cells".
        National Blood Transfusion Committee. Archived from the original on
        2008-08-04. Retrieved 2008-06-02. "Transfusion of Fresh Frozen Plasma,
        products, indications" (PDF). Agence française de sécurité sanitaire des
        produits de santé. Archived from the original (PDF) on 2008-06-25.
        Retrieved 2008-06-02. "American Red Cross Issues Emergency Need for
        Blood Donors". www.redcross.org. Retrieved 2020-12-12. Glynn, Simone A.;
        Williams, Alan E.; Nass, Catharie C.; Bethel, James; Kessler, Debra;
        Scott, Edward P.; Fridey, Joy; Kleinman, Steven H.; Schreiber,
        George B.; Retrovirus Epidemiology Donor Study (January 2003).
        "Attitudes toward blood donation incentives in the United States:
        implications for donor recruitment". Transfusion. 43 (1): 7–16.
        doi:10.1046/j.1537-2995.2003.00252.x. McCarthy, Leo J. (May 2007). "How
        do I manage a blood shortage in a transfusion service?". Transfusion. 47
        (5): 760–762. doi:10.1111/j.1537-2995.2007.01187.x. ISSN 0041-1132.
        Hensley, Scott (October 25, 1999). "Blood Shortages Become More Common".
        Modern Healthcare. 29: 34. Sass, Reuben G. (June 2013). "Toward a More
        Stable Blood Supply: Charitable Incentives, Donation Rates, and the
        Experience of September 11". The American Journal of Bioethics. 13 (6):
        38–45. doi:10.1080/15265161.2013.781703. ISSN 1526-5161. Schmidt, Paul
        J. (2002-02-21). "Blood and Disaster — Supply and Demand". New England
        Journal of Medicine. 346 (8): 617–620. doi:10.1056/nejm200202213460813.
        ISSN 0028-4793. Glynn, Simone A.; Busch, Michael P.; Schreiber, George
        B.; Murphy, Edward L.; Wright, David J.; Tu, Yongling; Kleinman, Steven
        H.; for the NHLBI REDS Study Group (2003-05-07). "Effect of a National
        Disaster on Blood Supply and Safety: The September 11 Experience". JAMA.
        289 (17): 2246. doi:10.1001/jama.289.17.2246. ISSN 0098-7484.
        "Maintaining an Adequate Blood Supply Is Key to Emergency Preparedness"
        (PDF). Government Accountability Office. Archived from the original
        (PDF) on 2013-12-24. Retrieved 2008-06-01. "Current status of America's
        Blood Centers blood supply". America's Blood Centers. Archived from the
        original on 2009-02-01. "World Blood Donor Day". World Health
        Organization. Archived from the original on 2008-09-15. Retrieved
        2008-06-01. "Blood safety and availability". World Health Organization.
        Retrieved 2019-01-11. Riley W, Schwei M, McCullough J (July 2007). "The
        United States' potential blood donor pool: estimating the prevalence of
        donor-exclusion factors on the pool of potential donors" (PDF).
        Transfusion. 47 (7): 1180–88. doi:10.1111/j.1537-2995.2007.01252.x. PMID
        17581152. S2CID 20867091. Archived from the original (PDF) on
        2012-09-27. Retrieved 2013-01-04. "Facts About Blood". America's Blood
        Centers. Archived from the original on 2013-11-08. Retrieved 2013-01-04.
        "Give Blood". NHS Blood & Transfustion. Archived from the original on
        2011-12-30. Retrieved 2012-01-04. Blood is something we all expect to be
        there for us when we need it, yet only 4% of us give blood. "Canadian
        Blood Services". Archived from the original on 2013-05-23. Edwards,
        Patrick W.; Zeichner, Amos (January 1985). "Blood donor development:
        Effects of personality, motivational and situational variables".
        Personality and Individual Differences. 6 (6): 743–751.
        doi:10.1016/0191-8869(85)90085-6. ISSN 0191-8869. Drake AW. Public
        Attitudes and Decision Processes With Regard to Blood Donation: Final
        Report and Executive Summary. Cambridge, Mass: MIT; 1978:1-189. Fields
        AC, Grindon AJ (1999). "Hemochromatosis, iron, and blood donation: a
        short review". Immunohematology. 15 (3): 108–12. PMID 15373512.
        Tuomainen TP, Salonen R, Nyyssönen K, Salonen JT (Mar 1997). "Cohort
        study of relation between donating blood and risk of myocardial
        infarction in 2682 men in eastern Finland". BMJ. 314 (7083): 793–94.
        doi:10.1136/bmj.314.7083.793. PMC 2126176. PMID 9080998. Atsma, F.; de
        Vegt, F. (Sep 2011). "The healthy donor effect: a matter of selection
        bias and confounding". Transfusion. 51 (9): 1883–85.
        doi:10.1111/j.1537-2995.2011.03270.x. PMID 21790637. S2CID 30195641.
        Manco, Melania; Fernandez-Real, Josè (1 January 2012). "Back to past
        leeches: repeated phlebotomies and cardiovascular risk". BMC Medicine.
        10 (1): 53. doi:10.1186/1741-7015-10-53. PMC 3409018. PMID 22647488.
        open access "Blood Plasma Safety" (PDF). GAO. Archived from the original
        (PDF) on 2008-06-25. Retrieved 2008-06-01. "Donate Blood For Money".
        Archived from the original on 2014-12-18. "Frequently Asked Questions".
        Australian Red Cross Blood Service. Archived from the original on
        2011-07-22. Retrieved 2011-07-18. L. Fusco "From Latin America to Asia,
        Rising Above Difficulties, Achieving New Heights" AABB News. April 1998:
        p. 30 "Guidelines for Implementation of Employee Blood Donation Leave"
        (PDF). New York State Department of Labor. Archived from the original
        (PDF) on 2008-06-25. Retrieved 2008-06-01. "Legge 21 ottobre 2005, n.
        219 (Law 21 October 2005, n. 219)". Italian Parliament. Archived from
        the original on 27 April 2009. Retrieved 2009-09-04. "Incentives program
        for blood donors and organizers". American Red Cross Connecticut Blood
        Services Region. Archived from the original on 2008-06-02. Retrieved
        2008-06-01. "Red Cross Honour Roll". Archived from the original on
        2012-09-28. "Keistimewaan Penderma Darah" [Blood Donor Privileges].
        Retrieved 2021-04-15. "Donate blood, get antibody test". Queens
        Chronicle. 25 February 2021. Archived from the original on 26 February
        2021. Retrieved 26 March 2021. Dunbar, Erin (1 March 2021). "Blood drive
        in Huntsville offering free COVID-19 antibody test". WHNT 19. Archived
        from the original on 1 March 2021. Retrieved 26 March 2021. "Red Cross
        calls on donors to refuel the blood supply". The Star. 25 March 2021.
        Archived from the original on 26 March 2021. Retrieved 26 March 2021.
        Steele WR; Schreiber GB; Guiltinan A; et al. (Jan 2008). "The role of
        altruistic behavior, empathetic concern, and social responsibility
        motivation in blood donation behavior". Transfusion. 48 (1): 43–54.
        doi:10.1111/j.1537-2995.2007.01481.x. PMID 17894795. S2CID 19252616.
        "Richard Titmuss". National University of Taipei social work department.
        Archived from the original on 2011-01-15. Retrieved 2010-11-07.
        Catherine Waldby, The University of Sydney. "The logistics of altruism".
        Archived from the original on 2011-01-21. Retrieved 2010-11-07. Philippe
        Steiner. "Gifts of Blood and Organs: the Market and "Fictitious"
        Commodities". Revue française de sociologie 5/2003 (Volume 44), pp.
        147–62. Archived from the original on 2011-12-04. Retrieved 2010-11-07.
        Further reading Wikimedia Commons has media related to Blood donation.
        Deferred Donors: Anemia & Blood Donation British guidelines for
        transfusion medicine Harrison E (Nov 2007). "Blood cells for sale". Sci.
        Am. 297 (5): 108–9. doi:10.1038/scientificamerican1107-108. PMID
        17990831. (subtitle) There's more to blood banking than just bagging
        blood vte Blood transfusion and transfusion medicine Authority control
        Edit this at Wikidata Categories: Blood donationHematologyTransfusion
        medicine Navigation menu Not logged in Talk Contributions Create account
        Log in ArticleTalk ReadEditView history Search Search Wikipedia Main
        page Contents Current events Random article About Wikipedia Contact us
        Donate Contribute Help Learn to edit Community portal Recent changes
        Upload file Tools What links here Related changes Special pages
        Permanent link Page information Cite this page Wikidata item
        Print/export Download as PDF Printable version In other projects
        Wikimedia Commons Languages Deutsch Español Français 한국어 हिन्दी
        Italiano Русский Tiếng Việt 中文 52 more Edit links This page was last
        edited on 11 November 2021, at 18:37 (UTC). Text is available under the
        Creative Commons Attribution-ShareAlike License; additional terms may
        apply. By using this site, you agree to the Terms of Use and Privacy
        Policy. Wikipedia® is a registered trademark of the Wikimedia
        Foundation, Inc., a non-profit organization. Privacy policyAbout
        WikipediaDisclaimersContact WikipediaMobile
        viewDevelopersStatisticsCookie statementWikimedia FoundationPowered by
        MediaWiki
      </p>
      <div style={{ backgroundColor: "yellow" }}>
        <p>this is footnote</p>
      </div>
    </div>
  );
};

export default Home;
