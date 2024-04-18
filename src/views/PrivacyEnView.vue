<script>
import {IconArrowLeft} from "@tabler/icons-vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeaderMobileComponent from "@/components/HeaderMobileComponent.vue";
import {onMounted} from "vue";
import gsap from "gsap";
export default {
  name: "PrivacyEnView",
  components: {HeaderMobileComponent, HeaderComponent, FooterComponent, IconArrowLeft },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
  setup () {
    onMounted(() => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 400);
    });
  }
}
</script>

<template>
  <HeaderComponent />
  <HeaderMobileComponent id="navbar-mobile" />
  <section class="section animate__animated animate__slideInUp animate__faster">
    <div class="placeholder top-holder"></div>
    <div class="policy-container container-fluid">
      <div class="flex flex-row mb-5 px-2">
        <button @click="goBack" class="back-btn-dark animate__animated animate__fadeIn"><IconArrowLeft color="#274c77" size="20" stroke-width="2" /></button>
      </div>
      <h3>PERSONAL DATA PROCESSING POLICY</h3>
      <br><br>
      <span class="h3">1. General Provisions</span> <br><br>

      <p class="article">
        1.1 This personal data processing policy is compiled in accordance with the requirements of the Federal Law of July 27, 2006. No. 152-FZ "On Personal Data" (hereinafter referred to as the Personal Data Law) and defines the procedure for processing personal data and measures to ensure the security of personal data undertaken by <span class="text-decoration-underline">Sole Proprietor Darya Sergeevna Maksimova</span> (hereinafter referred to as the Operator).
      </p>
      <br>
      <p class="article">
        1.2 The Operator's most important goal and condition for its activities is the observance of human and civil rights and freedoms when processing their personal data, including the protection of the rights to privacy, personal and family secrets.
        <br>
      </p>
      <p class="article">
        1.3 This Operator's policy regarding personal data processing (hereinafter referred to as the Policy) applies to all information that the Operator can obtain about visitors to the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>, as well as during the execution of any civil law contracts entered into with individuals (clients).
        <br>
      </p>
      <span class="h3">2. Basic concepts used in the Policy</span>
      <br><br>
      <p class="article">
        2.1. Personal data – any information related directly or indirectly to a specific or identifiable individual (subject of personal data or User of the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>.
        <br>
      </p>
      <p class="article">
        2.2. Personal data authorized by the subject of personal data for dissemination — personal data the access to which is provided by the subject of personal data by giving consent to the processing of personal data authorized by the subject of personal data for dissemination in the manner prescribed by the Personal Data Law (hereinafter — personal data authorized for dissemination).
        <br>
      </p>
      <p class="article">
        2.3. Operator — an individual (<span class="text-decoration-underline">Sole Proprietor Darya Sergeevna Maksimova</span>) who alone or jointly with others organizes and/or processes personal data, as well as defines the purposes of personal data processing, the composition of personal data to be processed, actions (operations) performed with personal data.
        <br>
      </p>
      <p class="article">
        2.4. User — any visitor to the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>.
        <br>
      </p>
      <p class="article">
        2.5. Website — a set of graphical and informational materials, as well as computer programs and databases ensuring their availability on the internet at the network address <a href="https://rhizomedev.com">https://rhizomedev.com</a>.
        <br>
      </p>
      <p class="article">
        2.6. Personal data processing — any action (operation) or set of actions (operations) performed using automation tools or without using such tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, change), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.
        <br>
      </p>
      <p class="article">
        2.7. Automated processing of personal data — processing of personal data using computer technology.
        <br>
      </p>
      <p class="article">
        2.8. Personal data information system — a set of personal data contained in databases and ensuring their processing information technologies and technical means.
        <br>
      </p>
      <p class="article">
        2.9. Blocking of personal data — temporary cessation of personal data processing (except when processing is necessary for the clarification of personal data).
        <br>
      </p>
      <p class="article">
        2.10. Depersonalization of personal data — actions as a result of which it is impossible to determine without the use of additional information the belonging of personal data to a specific User or another subject of personal data.
        <br>
      </p>
      <p class="article">
        2.11. Provision of personal data — actions aimed at disclosing personal data to a specific person or a specific circle of persons.
        <br>
      </p>
      <p class="article">
        2.12. Dissemination of personal data — any actions aimed at disclosing personal data to an unspecified circle of persons.
        <br>
      </p>
      <p class="article">
        2.13. Cross-border transfer of personal data — transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign individual, or a foreign legal entity.
        <br>
      </p>
      <p class="article">
        2.14. Destruction of personal data — any actions as a result of which personal data are irrevocably destroyed with the impossibility of further restoring the content of personal data in the personal data information system and/or destroyed material carriers of personal data.
        <br>
      </p>
      <span class="h3">3. The Operator's Main Rights and Obligations</span>
      <br><br>
      <br>

      <p class="article">
        3.1. The Operator has the right to:
        — receive reliable information and/or documents containing personal data from the subject of personal data;
        — in case of withdrawal by the subject of personal data of consent to the processing of personal data, as well as the direction of an appeal with the requirement to stop processing personal data, the Operator may continue processing personal data without the consent of the subject of personal data if there are grounds specified in the Law on Personal Data;
        — independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of the obligations provided by the Law on Personal Data and the regulatory legal acts adopted in accordance with it unless otherwise provided by the Law on Personal Data or other federal laws.
        <br>
      </p>
      <p class="article">
        3.2. The Operator is obliged to:
        — provide the subject of personal data upon his request with information regarding the processing of his personal data;
        — explain to the subject of personal data the legal consequences of refusing to provide his personal data and/or consent to their processing if the provision of personal data is mandatory in accordance with the Law on Personal Data;
        — organize the processing of personal data in the order established by the current legislation of the Russian Federation;
        — respond to inquiries and requests from subjects of personal data and their legal representatives in accordance with the requirements of the Law on Personal Data;
        — report to the authorized body for the protection of the rights of subjects of personal data upon request of this body the necessary information within ten working days from the date of receipt of such request;
        — publish in the corresponding information and telecommunication network, including on the pages of the Operator's website in the information and telecommunication network "Internet", which is used for the collection of personal data, a document defining its policy regarding the processing of personal data, and information on implemented requirements for the protection of personal data, as well as ensure access to the specified document using means of the corresponding information and telecommunication network;
        — take the necessary legal, organizational, and technical measures to protect personal data from unlawful or accidental access to them, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other unlawful actions in relation to personal data;
        — stop the transfer (distribution, provision, access) of personal data, stop processing and destroy personal data in the manner and cases provided by the Law on Personal Data;
        — perform other duties provided by the Law on Personal Data.
        <br>
      </p>
      <span class="h3">4. The Main Rights and Obligations of Personal Data Subjects</span>
      <br><br>
      <p class="article">
        4.1. Subjects of personal data have the right to:<br>
        <br>
        — receive information regarding the processing of his personal data, except in cases provided by federal laws. The information is provided to the subject of personal data by the Operator in an accessible form, and it must not contain personal data related to other subjects of personal data, except in cases where there are legal grounds for disclosing such personal data. The list of information and the order of its receipt are established by Article 14 of the Law on Personal Data;
        <br>
        — demand from the operator the clarification of his personal data, their blocking or destruction if the personal data are incomplete, outdated, inaccurate, illegally obtained, or are not necessary for the declared purpose of processing, as well as take legal measures to protect their rights;
        <br>
        — put forward the condition of prior consent when processing personal data for the purpose of promoting goods, works, and services on the market;
        <br>
        — to withdraw consent to the processing of personal data, as well as to send a requirement to stop the processing of personal data;
        <br>
        — appeal to the authorized body for the protection of the rights of subjects of personal data or in court the unlawful actions or inaction of the Operator when processing his personal data;
        <br>
        — exercise other rights provided by the legislation of the Russian Federation.
        <br>
      </p>
      <p class="article">
        4.2. Subjects of personal data are obliged to:
        — provide the Operator with reliable data about themselves;
        — inform the Operator about the clarification (updating, change) of their personal data.
        <br>
      </p>
      <p class="article">
        4.3. Persons who have provided the Operator with unreliable information about themselves, or information about another subject of personal data without the consent of the latter, are liable in accordance with the legislation of the Russian Federation.
        <br>
      </p>
      <span class="h3">5. Categories of Personal Data Subjects and the List of Personal Data</span>
      <br>
      <p class="article">
        5.1. The Operator processes the personal data of the following subjects of personal data:
        5.1.1. Visitors of the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>.
        5.1.2. Individuals who have entered into civil law contracts.
        <br>
      </p>
      <p class="article">
        5.2. The Operator may process the following personal data<br><br>
        of the User and another subject of personal data:<br>
        5.2.1. Surname, name, patronymic.<br>
        5.2.2. Email address.<br>
        5.2.3. Phone numbers.<br>
        5.2.4. Contents and details of the civil law contract.<br>
        <br>
      </p>
      <p class="article">
        5.3. The site also collects and processes anonymized data about visitors (including “cookies”) using Internet statistics services (Yandex Metrica, Google Analytics, and others).
        <br>
      </p>
      <p class="article">
        5.4. The above data further in the text of the Policy are united by the general concept of Personal Data.
        <br>
      </p>
      <p class="article">
        5.5. The Operator does not process special categories of personal data relating to racial, national affiliation, political views, religious or philosophical beliefs, intimate life.
        <br>
      </p>
      <p class="article">
        5.6. The Operator does not carry out the processing of biometric data.
        <br>
      </p>
      <span class="h3">6. Principles of Personal Data Processing</span> <br>
      <br>
      <p class="article">
        6.1. Personal data processing is carried out on a legal and fair basis.
        <br>
      </p>
      <p class="article">
        6.2. Personal data processing is limited to achieving specific, predetermined, and legitimate purposes. Processing of personal data incompatible with the purposes of collecting personal data is not allowed.
        <br>
      </p>
      <p class="article">
        6.3. Database combination containing personal data being processed for purposes incompatible with each other is not allowed.
        <br>
      </p>
      <p class="article">
        6.4. Only personal data that meets the purposes of their processing is subject to processing.
        <br>
      </p>
      <p class="article">
        6.5. The content and volume of processed personal data correspond to the stated purposes of processing. The redundancy of processed personal data in relation to the stated purposes of their processing is not allowed.
        <br>
      </p>
      <p class="article">
        6.6. When processing personal data, the accuracy of personal data, their sufficiency, and, if necessary, relevance to the purposes of personal data processing are ensured. The operator takes the necessary measures and/or ensures their adoption to remove or clarify incomplete or inaccurate data.
        <br>
      </p>
      <p class="article">
        6.7. Storage of personal data is carried out in a form that allows determining the subject of personal data, no longer than the purposes of personal data processing require if the period of personal data storage is not established by federal law, a contract, a party to which, beneficiary, or guarantor by which is the subject of personal data. The processed personal data are destroyed or depersonalized upon achieving the purposes of processing or in case of loss of the need to achieve these goals, unless otherwise provided by federal law.
        <br>
      </p>
      <span class="h3">7. Purposes of Personal Data Processing</span>
      <br>
      <p class="article">
        <br>
        7.1. The purpose of processing the User's personal data:<br><br>
        – informing the User by sending emails;<br>
        – establishing feedback with the User, including sending notifications, requests concerning the use of the website, rendering services, processing requests and applications from the User;<br>
        – concluding, executing, and terminating civil law contracts with subjects of personal data;<br>
        – establishing feedback with the User, including sending information, notifications regarding the website, rendering services, processing requests and applications from the User;<br>
        <br>
      </p>
      <p class="article">
        7.2. The Operator also has the right to send notifications to the User about new products and services, special offers, and various events. The user can always refuse to receive informational messages by sending the Operator an email to the email address info@rhizomedev.com with the note "Refusal of notifications of new products and services and special offers."
        <br>
      </p>
      <p class="article">
        7.3. Anonymized data of Users collected through the services of Internet statistics are used to collect information about the actions of Users on the site, improve the quality of the site and its content.
        <br>
      </p>
      <p class="article">
        7.4 The procedure for determining for each purpose of processing personal data the category and list of processed personal data, categories of subjects whose personal data are processed, methods, terms of their processing and storage, the procedure for destruction of personal data upon achieving the purposes of processing or in case of other lawful grounds are given in the Appendix to this Policy.
        <br>
      </p>
      <span class="h3">8. Legal Basis for Personal Data Processing</span>
      <br>
      <p class="article"><br>
        8.1. The legal bases for the processing of personal data by the Operator are:<br>
        – Civil Code of the Russian Federation;<br>
        – Federal Law of July 27, 2006, No. 152-FZ "On Personal Data";<br>
        – Federal Law of July 27, 2006 N 149-FZ "On Information, Information Technologies, and Information Protection";<br>
        – other federal laws and regulatory legal acts in the field of personal data protection;<br>
        – Personal Data Processing Policy of Sole Proprietor Darya Sergeevna Maksimova;<br>
        – contracts concluded between the Operator and the subject of personal data;<br>
        – consents of subjects of personal data and Users for the processing of their personal data, and consents for the processing of personal data allowed for distribution.<br>
        <br>
      </p>
      <p class="article">
        8.2. The Operator processes the User's personal data only if they are filled in and/or sent by the User independently through special forms located on the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>. By filling out the respective forms, the User expresses his consent to this Policy.
        <br>
      </p>
      <p class="article">
        8.3. The Operator processes anonymized data about the User if allowed by the User's browser settings (saving of cookies and the use of JavaScript technology is enabled).
        <br>
      </p>
      <p class="article">
        8.4. The subject of personal data independently decides to provide his personal data and consents freely, by his own will, and in his interest.
        <br>
      </p>
      <span class="h3">9. Conditions for Personal Data Processing</span><br>
      <br>
      <p class="article">
        9.1. The processing of personal data is carried out with the consent of the subject of personal data to the processing of his personal data.
        <br>
      </p>
      <p class="article">
        Consent is given by sending forms by the User on the website <a href="https://rhizomedev.com">https://rhizomedev.com</a>. The User guarantees that he is of legal age. Consent to the processing of personal data can be given by the subject of personal data or his representative in any form allowing to confirm the fact of its receipt unless federal law establishes otherwise. In case of receiving consent to the processing of personal data from the representative of the subject of personal data, the powers of this representative to give consent on behalf of the subject of personal data are checked by the operator.
        <br>
      </p>
      <p class="article">
        9.2. The processing of personal data is necessary to achieve the goals provided by an international treaty of the Russian Federation or the law, for the exercise of the functions, powers, and duties imposed by the legislation of the Russian Federation on the operator.
        <br>
      </p>
      <p class="article">
        9.3. The processing of personal data is necessary for the administration of justice, the execution of a judicial act, an act of another body or official to be executed in accordance with the legislation of the Russian Federation on enforcement proceedings.
        <br>
      </p>
      <p class="article">
        9.4. The processing of personal data is necessary for the execution of a contract to which the subject of personal data is a party or beneficiary or guarantor, as well as for concluding a contract on the initiative of the subject of personal data or a contract under which the subject of personal data will be a beneficiary or guarantor. The contract concluded with the subject of personal data cannot contain provisions restricting the rights and freedoms of subjects of the Russian Federation, establishing cases of processing personal data of minors unless otherwise provided by the legislation of the Russian Federation, as well as provisions allowing the conclusion of a contract as a condition of inaction of the subject of personal data.
        <br>
      </p>
      <p class="article">
        9.5. The processing of personal data is necessary for the exercise of the rights and legitimate interests of the operator or third parties or for achieving socially significant objectives provided that the rights and freedoms of the subject of personal data are not thereby violated.
        <br>
      </p>
      The processing of personal data subject to publication or mandatory disclosure in accordance with federal law is carried out.
      <br><br>
      <p class="article">
        <span class="h3">10. Procedure for collecting, storing, transferring, and other types of personal data processing</span><br>
        <br>
      </p>
      <p class="article">
        The security of personal data processed by the Operator is ensured by implementing legal, organizational, and technical measures necessary to fully comply with the current legislation on personal data protection.
        <br>
      </p>
      <p class="article">
        10.1. The Operator ensures the security of personal data and takes all possible measures to exclude access to personal data by unauthorized persons.
        <br>
      </p>
      <p class="article">
        10.2. Under no circumstances will the user's personal data be transferred to third parties, except in cases related to the execution of current legislation or if the subject of personal data has consented to the transfer of data to a third party to fulfill obligations under a civil law contract.
        <br>
      </p>
      <p class="article">
        10.3. If inaccuracies in personal data are detected, the User can update them independently by sending a notification to the Operator's email address <a href="mailto:info@rhizomedev.com">info@rhizomemedev.com</a> with the note "Updating personal data".
        <br>
      </p>
      <p class="article">
        10.4. The term for processing personal data is determined by the achievement of the purposes for which the personal data were collected, unless a different term is provided by the contract or current legislation.
        The user can withdraw their consent to the processing of personal data at any time by sending a notification via email to the Operator's email address <a href="https://rhizomedev.com">https://rhizomedev.com</a> with the note "Withdrawal of consent to the processing of personal data".
        <br>
      </p>
      <p class="article">
        10.5. All information collected by third-party services, including payment systems, communication means, and other service providers, is stored and processed by the said persons (Operators) in accordance with their User Agreement and Privacy Policy. The subject of personal data and/or with these documents. The Operator is not responsible for the actions of third parties, including those mentioned herein.
        <br>
      </p>
      <p class="article">
        10.6. The User's consent to the processing of personal data allowed for distribution is drawn up separately from other consents to the processing of his personal data. At the same time, the conditions specified, in particular, in Art. 10.1 of the Personal Data Law are observed. The requirements for the content of such consent are established by the authorized body for the protection of the rights of personal data subjects.<br>
        10.6.1 Consent to the processing of personal data allowed for distribution is provided by the User directly to the Operator.<br>
        10.6.2 The Operator is obliged to publish information about the processing conditions, the presence of prohibitions and conditions on the processing of personal data allowed for distribution to an unlimited number of persons no later than three working days from the date of receipt of the consent of the User.<br>
        10.6.3 The transfer (distribution, provision, access) of personal data allowed by the subject of personal data for distribution must be stopped at any time at the request of the subject of personal data. This requirement must include the first name, last name, patronymic (if applicable), contact information (phone number, email address) of the personal data subject, and a list of personal data whose processing is to be stopped. The personal data mentioned in this requirement can be processed only by the Operator to whom it is directed.<br>
        10.6.4 Consent to the processing of personal data allowed for distribution ceases to be valid from the moment the Operator receives the requirement specified in p. 10.6.3 of this Policy regarding the processing of personal data.<br>
      </p>
      <p class="article">
        10.7. The prohibitions set by the personal data subject on the transfer (except for granting access) and on the processing or conditions of processing (except for obtaining access) of personal data allowed for distribution do not apply in cases of processing personal data in state, public, and other public interests defined by the legislation of the Russian Federation.
      </p>
      <p class="article">
        10.8. The Operator ensures the confidentiality of personal data during their processing.
      </p>
      <p class="article">
        10.9. Storage of personal data.<br>
        10.9.1. Personal data of subjects can be obtained, further processed, and transferred for storage both on paper and in electronic form.
        <br>
        10.9.2. Personal data fixed on paper are stored in lockable cabinets or in lockable premises with limited access rights.
        <br>
        10.9.3. Personal data of subjects processed using automation tools for different purposes are stored in different folders.
        <br>
        10.9.4. It is not allowed to store and place documents containing personal data in open electronic directories (file exchanges) in the PDIS.
        <br>
        10.9.5. The Operator stores personal data in a form that allows determining the subject of personal data, no longer than the purposes of processing personal data require, if the storage period of personal data is not established by federal law, a contract, the party of which, the beneficiary, or guarantor under which is the subject of personal data.
        <br>
      </p>
      <p class="article">
        10.10. The condition for terminating the processing of personal data may be:
        <br><br>
        - achievement of the purposes of processing personal data,<br>
        - expiration of the personal data subject's consent or withdrawal of consent by the personal data subject, as well as the detection of unlawful processing of personal data.
        <br>
      </p>
      <p class="article">
        10.11 Upon the occurrence of the above events, the Operator ensures the destruction of personal data.
        <br>
      </p>
      <p class="article">
        10.12. Destruction of personal data.<br>
        <br>
        10.12.1. Destruction of documents (carriers) containing personal data is carried out by incineration, shredding (grinding), chemical decomposition, transformation into an amorphous mass or powder. The use of a shredder is allowed for the destruction of paper documents.
        <br>
        10.12.2. Personal data on electronic media are destroyed by erasing from the Operator's personal data servers or formatting the media.
        <br>
      </p>
      <span class="h3">11. List of actions performed by the Operator with the obtained personal data</span><br>
      <br>
      <p class="article">
        11.1. The Operator carries out the collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), anonymization, blocking, deletion, and destruction of personal data.
        <br>
      </p>
      <p class="article">
        11.2. The processing of personal data by the Operator is carried out in a mixed way, using computing technology (automated processing of personal data) with obtaining and/or transferring the received information through information and telecommunication networks or without such, as well as maintaining documents on paper media.
        At the same time, the Operator fulfills the requirements for automated and non-automated processing of personal data, provided by the Law on Personal Data and the regulatory legal acts adopted in accordance with it.
        <br>
      </p>
      <span class="h3">12. Cross-border transfer of personal data</span><br>
      <br>
      <p class="article">
        12.1. The Operator does not carry out cross-border transfer of personal data.
        <br>
      </p>
      <span class="h3">13. Protection of personal data</span>
      <br>
      <p class="article">
        <br>
        13.1. When processing personal data, the Operator takes the necessary legal, organizational, and technical measures to protect personal data from unauthorized or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data.
        <br>
        13.2. The main measures to protect personal data used by the Operator are:
        <br>
        13.2.1. Identification of threats to the security of personal data during their processing in personal data information systems;
        <br>
        13.2.2. Application of organizational and technical measures to ensure the security of personal data during their processing in personal data information systems necessary to meet the requirements for the protection of personal data, the execution of which ensures the levels of personal data protection established by the Government of the Russian Federation;
        <br>
        13.2.3. Assessment of the effectiveness of the measures taken to ensure the security of personal data before putting the personal data information system into operation;
        <br>
        13.2.4. Accounting for machine carriers of personal data;
        <br>
        13.2.5. Detection of unauthorized access to personal data and taking measures, including measures to detect, prevent, and eliminate the consequences of computer attacks on personal data information systems and responding to computer incidents in them;
        <br>
        13.2.6. Organization of backup and recovery of the operability of personal data information systems and personal data modified or destroyed due to unauthorized access to them;
        <br>
        13.2.7 Establishing rules for access to personal data processed in the personal data information system, as well as ensuring the registration and accounting of all actions performed with personal data in the personal data information system;
        <br>
        13.2.8. Control over the measures taken to ensure the security of personal data and the level of protection of personal data information systems;
        <br>
        13.2.9. Assessment of the damage that can be caused to the subjects of personal data in case of violation of the Federal Law of 27.07.2006 N 152-FZ "On personal data", the ratio of the said damage and the measures taken by the operator aimed at ensuring the fulfillment of obligations provided by the Federal Law of 27.07.2006 N 152-FZ "On personal data";
        <br>
        13.2.10. Determining the level of protection of personal data when processed in personal data information systems.
        <br>
        13.2.11. Restricting access to premises where the main technical means and information systems of personal data are located and non-automated processing of personal data is carried out;
        <br>
        13.2.12. Establishing requirements for the complexity of passwords for access to personal data information systems;
        <br>
        13.2.13. Implementation of antivirus control, prevention of the introduction into the corporate network of malicious programs (viruses) and software bugs.
        <br>
        13.2.14. Organizing timely updates of the software used in personal data information systems and information protection means.
        <br>
        13.2.15. Other measures provided by the legislation of the Russian Federation in the field of personal data.
        <br>
      </p>
      <span class="h3">14. Confidentiality of personal data</span><br>
      <br>
      <p class="article">
        The Operator and other persons who have gained access to personal data must not disclose to third parties and not distribute personal data without the consent of the subject of personal data unless otherwise provided by federal law.
        <br>
      </p>
      <span class="h3">15. Final provisions</span><br>
      <br>
      <p class="article">
        15.1. The user can get any clarifications on issues of interest regarding the processing of his personal data by contacting the Operator via email <a href="mailto:info@rhizomedev.com">info@rhizomemedev.com</a>. The policy is valid indefinitely until replaced by a new version.
        <br>
      </p>
      <p class="article">
        The Operator has the right to make changes to this Policy. When making changes, the date of the last update is indicated in the current version. The new version of the Policy comes into effect from the moment it is posted on the website unless otherwise provided by the new edition of the Policy.
        <br>
      </p>
      <p class="article">
        15.2. All relations related to the processing of personal data not reflected in this Policy are regulated according to the provisions of the legislation of the Russian Federation.
        <br>
      </p>
      <p class="article">
        15.3. The current version of the Policy is freely available on the Internet at <a href="mailto:info@rhizomedev.com">info@rhizomemedev.com</a>
        <br>
      </p>
      <span class="h3">16. DETAILS</span> <br><br>
      <p class="article">
        Sole Proprietor Darya Sergeevna Maksimova<br>
        INN 532204026010<br>
        OGRNIP  321532100002155<br>
        Legal address: Novgorod region, Starorussky district, Staraya Russa city<br>
        Actual address: Novgorod region, Starorussky district, Staraya Russa city<br>
        Email: info@rizhomedev.com<br>
      </p>
      <div class="placeholder"></div>
    </div>
  </section>
  <FooterComponent />
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .policy-container {
    max-height: 100%!important;
    padding-top: 5rem!important;
    padding-left: 2rem!important;
    padding-right: 2rem!important;
  }
  .top-holder {
    display: none!important;
  }
}
.policy-container {
  height: 100%;
  padding-top: 20vh;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 5rem;
}
.h3 {
  margin-bottom: 2rem!important;
}
.section {
  width: 100%;
  max-width: max-content;
}
.back-btn-dark {
  background-color: transparent;
  border: 2px solid #274c77;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  padding: 3px!important;
  max-width: 2rem;
  height: 100%;
  max-height: 30px;
}
</style>