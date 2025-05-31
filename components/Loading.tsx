'use client';

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 375 375"
        fill="none"
        className="w-440 h-44"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <clipPath id="a">
          <path d="M107.25 107.25h160.5v160.5h-160.5Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="m224.9727 111.4922 38.5351 38.5351a14.4816 14.4816 0 0 1 4.2422 10.2422v54.461a14.4816 14.4816 0 0 1-4.2422 10.2422l-38.5351 38.5351a14.4816 14.4816 0 0 1-10.2422 4.2422h-54.461a14.4816 14.4816 0 0 1-10.2422-4.2422l-38.5351-38.5351a14.4816 14.4816 0 0 1-4.2422-10.2422v-54.461a14.4816 14.4816 0 0 1 4.2422-10.2422l38.5351-38.5351a14.4816 14.4816 0 0 1 10.2422-4.2422h54.461a14.4816 14.4816 0 0 1 10.2422 4.2422Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M125.0977 125.0977h124.8046v124.8046H125.0977Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="m217.582 129.3398 28.0782 28.0782c2.7187 2.7148 4.2421 6.4023 4.2421 10.2422v39.6796c0 3.8399-1.5234 7.5274-4.2421 10.2422l-28.0782 28.0782c-2.7148 2.7187-6.4023 4.2421-10.2422 4.2421h-39.6796c-3.8399 0-7.5274-1.5234-10.2422-4.2421l-28.0782-28.0782c-2.7187-2.7148-4.2421-6.4023-4.2421-10.2422v-39.6796c0-3.8399 1.5234-7.5274 4.2421-10.2422l28.0782-28.0782c2.7148-2.7187 6.4023-4.2421 10.2422-4.2421h39.6796c3.8399 0 7.5274 1.5234 10.2422 4.2421Zm0 0" />
        </clipPath>
        <linearGradient
          id="c"
          x1="0"
          x2="256"
          y1="128"
          y2="128"
          gradientTransform="translate(107.2484 107.2483) scale(.62697)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8C52FF" />
          <stop offset=".0039" stopColor="#8C53FF" />
          <stop offset=".0078" stopColor="#8C53FF" />
          <stop offset=".0117" stopColor="#8B54FF" />
          <stop offset=".0156" stopColor="#8B54FF" />
          <stop offset=".0195" stopColor="#8B55FF" />
          <stop offset=".0234" stopColor="#8B55FE" />
          <stop offset=".0273" stopColor="#8B56FE" />
          <stop offset=".0313" stopColor="#8A57FE" />
          <stop offset=".0352" stopColor="#8A57FE" />
          <stop offset=".0391" stopColor="#8A58FE" />
          <stop offset=".043" stopColor="#8A58FE" />
          <stop offset=".0469" stopColor="#8A59FE" />
          <stop offset=".0508" stopColor="#8A59FE" />
          <stop offset=".0547" stopColor="#895AFE" />
          <stop offset=".0586" stopColor="#895AFE" />
          <stop offset=".0625" stopColor="#895BFD" />
          <stop offset=".0664" stopColor="#895CFD" />
          <stop offset=".0703" stopColor="#895CFD" />
          <stop offset=".0742" stopColor="#885DFD" />
          <stop offset=".0781" stopColor="#885DFD" />
          <stop offset=".082" stopColor="#885EFD" />
          <stop offset=".0859" stopColor="#885EFD" />
          <stop offset=".0898" stopColor="#885FFD" />
          <stop offset=".0938" stopColor="#875FFD" />
          <stop offset=".0977" stopColor="#8760FD" />
          <stop offset=".1016" stopColor="#8761FC" />
          <stop offset=".1055" stopColor="#8761FC" />
          <stop offset=".1094" stopColor="#8762FC" />
          <stop offset=".1133" stopColor="#8762FC" />
          <stop offset=".1172" stopColor="#8663FC" />
          <stop offset=".1211" stopColor="#8663FC" />
          <stop offset=".125" stopColor="#8664FC" />
          <stop offset=".1289" stopColor="#8665FC" />
          <stop offset=".1328" stopColor="#8665FC" />
          <stop offset=".1367" stopColor="#8566FC" />
          <stop offset=".1406" stopColor="#8566FB" />
          <stop offset=".1445" stopColor="#8567FB" />
          <stop offset=".1484" stopColor="#8567FB" />
          <stop offset=".1523" stopColor="#8568FB" />
          <stop offset=".1563" stopColor="#8568FB" />
          <stop offset=".1602" stopColor="#8469FB" />
          <stop offset=".1641" stopColor="#846AFB" />
          <stop offset=".168" stopColor="#846AFB" />
          <stop offset=".1719" stopColor="#846BFB" />
          <stop offset=".1758" stopColor="#846BFB" />
          <stop offset=".1797" stopColor="#836CFB" />
          <stop offset=".1836" stopColor="#836CFA" />
          <stop offset=".1875" stopColor="#836DFA" />
          <stop offset=".1914" stopColor="#836DFA" />
          <stop offset=".1953" stopColor="#836EFA" />
          <stop offset=".1992" stopColor="#826FFA" />
          <stop offset=".2031" stopColor="#826FFA" />
          <stop offset=".207" stopColor="#8270FA" />
          <stop offset=".2109" stopColor="#8270FA" />
          <stop offset=".2148" stopColor="#8271FA" />
          <stop offset=".2188" stopColor="#8271FA" />
          <stop offset=".2227" stopColor="#8172F9" />
          <stop offset=".2266" stopColor="#8172F9" />
          <stop offset=".2305" stopColor="#8173F9" />
          <stop offset=".2344" stopColor="#8174F9" />
          <stop offset=".2383" stopColor="#8174F9" />
          <stop offset=".2422" stopColor="#8075F9" />
          <stop offset=".2461" stopColor="#8075F9" />
          <stop offset=".25" stopColor="#8076F9" />
          <stop offset=".2539" stopColor="#8076F9" />
          <stop offset=".2578" stopColor="#8077F9" />
          <stop offset=".2617" stopColor="#7F77F8" />
          <stop offset=".2656" stopColor="#7F78F8" />
          <stop offset=".2695" stopColor="#7F79F8" />
          <stop offset=".2734" stopColor="#7F79F8" />
          <stop offset=".2773" stopColor="#7F7AF8" />
          <stop offset=".2813" stopColor="#7F7AF8" />
          <stop offset=".2852" stopColor="#7E7BF8" />
          <stop offset=".2891" stopColor="#7E7BF8" />
          <stop offset=".293" stopColor="#7E7CF8" />
          <stop offset=".2969" stopColor="#7E7DF8" />
          <stop offset=".3008" stopColor="#7E7DF7" />
          <stop offset=".3047" stopColor="#7D7EF7" />
          <stop offset=".3086" stopColor="#7D7EF7" />
          <stop offset=".3125" stopColor="#7D7FF7" />
          <stop offset=".3164" stopColor="#7D7FF7" />
          <stop offset=".3203" stopColor="#7D80F7" />
          <stop offset=".3242" stopColor="#7C80F7" />
          <stop offset=".3281" stopColor="#7C81F7" />
          <stop offset=".332" stopColor="#7C82F7" />
          <stop offset=".3359" stopColor="#7C82F7" />
          <stop offset=".3398" stopColor="#7C83F7" />
          <stop offset=".3438" stopColor="#7C83F6" />
          <stop offset=".3477" stopColor="#7B84F6" />
          <stop offset=".3516" stopColor="#7B84F6" />
          <stop offset=".3555" stopColor="#7B85F6" />
          <stop offset=".3594" stopColor="#7B85F6" />
          <stop offset=".3633" stopColor="#7B86F6" />
          <stop offset=".3672" stopColor="#7A87F6" />
          <stop offset=".3711" stopColor="#7A87F6" />
          <stop offset=".375" stopColor="#7A88F6" />
          <stop offset=".3789" stopColor="#7A88F6" />
          <stop offset=".3828" stopColor="#7A89F5" />
          <stop offset=".3867" stopColor="#7989F5" />
          <stop offset=".3906" stopColor="#798AF5" />
          <stop offset=".3945" stopColor="#798AF5" />
          <stop offset=".3984" stopColor="#798BF5" />
          <stop offset=".4023" stopColor="#798CF5" />
          <stop offset=".4063" stopColor="#798CF5" />
          <stop offset=".4102" stopColor="#788DF5" />
          <stop offset=".4141" stopColor="#788DF5" />
          <stop offset=".418" stopColor="#788EF5" />
          <stop offset=".4219" stopColor="#788EF4" />
          <stop offset=".4258" stopColor="#788FF4" />
          <stop offset=".4297" stopColor="#778FF4" />
          <stop offset=".4336" stopColor="#7790F4" />
          <stop offset=".4375" stopColor="#7791F4" />
          <stop offset=".4414" stopColor="#7791F4" />
          <stop offset=".4453" stopColor="#7792F4" />
          <stop offset=".4492" stopColor="#7692F4" />
          <stop offset=".4531" stopColor="#7693F4" />
          <stop offset=".457" stopColor="#7693F4" />
          <stop offset=".4609" stopColor="#7694F3" />
          <stop offset=".4648" stopColor="#7694F3" />
          <stop offset=".4688" stopColor="#7695F3" />
          <stop offset=".4727" stopColor="#7596F3" />
          <stop offset=".4766" stopColor="#7596F3" />
          <stop offset=".4805" stopColor="#7597F3" />
          <stop offset=".4844" stopColor="#7597F3" />
          <stop offset=".4883" stopColor="#7598F3" />
          <stop offset=".4922" stopColor="#7498F3" />
          <stop offset=".4961" stopColor="#7499F3" />
          <stop offset=".5" stopColor="#749AF3" />
          <stop offset=".5039" stopColor="#749AF2" />
          <stop offset=".5078" stopColor="#749BF2" />
          <stop offset=".5117" stopColor="#739BF2" />
          <stop offset=".5156" stopColor="#739CF2" />
          <stop offset=".5195" stopColor="#739CF2" />
          <stop offset=".5234" stopColor="#739DF2" />
          <stop offset=".5273" stopColor="#739DF2" />
          <stop offset=".5313" stopColor="#739EF2" />
          <stop offset=".5352" stopColor="#729FF2" />
          <stop offset=".5391" stopColor="#729FF2" />
          <stop offset=".543" stopColor="#72A0F1" />
          <stop offset=".5469" stopColor="#72A0F1" />
          <stop offset=".5508" stopColor="#72A1F1" />
          <stop offset=".5547" stopColor="#71A1F1" />
          <stop offset=".5586" stopColor="#71A2F1" />
          <stop offset=".5625" stopColor="#71A2F1" />
          <stop offset=".5664" stopColor="#71A3F1" />
          <stop offset=".5703" stopColor="#71A4F1" />
          <stop offset=".5742" stopColor="#70A4F1" />
          <stop offset=".5781" stopColor="#70A5F1" />
          <stop offset=".582" stopColor="#70A5F0" />
          <stop offset=".5859" stopColor="#70A6F0" />
          <stop offset=".5898" stopColor="#70A6F0" />
          <stop offset=".5938" stopColor="#70A7F0" />
          <stop offset=".5977" stopColor="#6FA7F0" />
          <stop offset=".6016" stopColor="#6FA8F0" />
          <stop offset=".6055" stopColor="#6FA9F0" />
          <stop offset=".6094" stopColor="#6FA9F0" />
          <stop offset=".6133" stopColor="#6FAAF0" />
          <stop offset=".6172" stopColor="#6EAAF0" />
          <stop offset=".6211" stopColor="#6EABEF" />
          <stop offset=".625" stopColor="#6EABEF" />
          <stop offset=".6289" stopColor="#6EACEF" />
          <stop offset=".6328" stopColor="#6EACEF" />
          <stop offset=".6367" stopColor="#6DADEF" />
          <stop offset=".6406" stopColor="#6DAEEF" />
          <stop offset=".6445" stopColor="#6DAEEF" />
          <stop offset=".6484" stopColor="#6DAFEF" />
          <stop offset=".6523" stopColor="#6DAFEF" />
          <stop offset=".6563" stopColor="#6DB0EF" />
          <stop offset=".6602" stopColor="#6CB0EF" />
          <stop offset=".6641" stopColor="#6CB1EE" />
          <stop offset=".668" stopColor="#6CB1EE" />
          <stop offset=".6719" stopColor="#6CB2EE" />
          <stop offset=".6758" stopColor="#6CB3EE" />
          <stop offset=".6797" stopColor="#6BB3EE" />
          <stop offset=".6836" stopColor="#6BB4EE" />
          <stop offset=".6875" stopColor="#6BB4EE" />
          <stop offset=".6914" stopColor="#6BB5EE" />
          <stop offset=".6953" stopColor="#6BB5EE" />
          <stop offset=".6992" stopColor="#6AB6EE" />
          <stop offset=".7031" stopColor="#6AB7ED" />
          <stop offset=".707" stopColor="#6AB7ED" />
          <stop offset=".7109" stopColor="#6AB8ED" />
          <stop offset=".7148" stopColor="#6AB8ED" />
          <stop offset=".7188" stopColor="#6AB9ED" />
          <stop offset=".7227" stopColor="#69B9ED" />
          <stop offset=".7266" stopColor="#69BAED" />
          <stop offset=".7305" stopColor="#69BAED" />
          <stop offset=".7344" stopColor="#69BBED" />
          <stop offset=".7383" stopColor="#69BCED" />
          <stop offset=".7422" stopColor="#68BCEC" />
          <stop offset=".7461" stopColor="#68BDEC" />
          <stop offset=".75" stopColor="#68BDEC" />
          <stop offset=".7539" stopColor="#68BEEC" />
          <stop offset=".7578" stopColor="#68BEEC" />
          <stop offset=".7617" stopColor="#67BFEC" />
          <stop offset=".7656" stopColor="#67BFEC" />
          <stop offset=".7695" stopColor="#67C0EC" />
          <stop offset=".7734" stopColor="#67C1EC" />
          <stop offset=".7773" stopColor="#67C1EC" />
          <stop offset=".7813" stopColor="#67C2EB" />
          <stop offset=".7852" stopColor="#66C2EB" />
          <stop offset=".7891" stopColor="#66C3EB" />
          <stop offset=".793" stopColor="#66C3EB" />
          <stop offset=".7969" stopColor="#66C4EB" />
          <stop offset=".8008" stopColor="#66C4EB" />
          <stop offset=".8047" stopColor="#65C5EB" />
          <stop offset=".8086" stopColor="#65C6EB" />
          <stop offset=".8125" stopColor="#65C6EB" />
          <stop offset=".8164" stopColor="#65C7EB" />
          <stop offset=".8203" stopColor="#65C7EA" />
          <stop offset=".8242" stopColor="#64C8EA" />
          <stop offset=".8281" stopColor="#64C8EA" />
          <stop offset=".832" stopColor="#64C9EA" />
          <stop offset=".8359" stopColor="#64C9EA" />
          <stop offset=".8398" stopColor="#64CAEA" />
          <stop offset=".8438" stopColor="#64CBEA" />
          <stop offset=".8477" stopColor="#63CBEA" />
          <stop offset=".8516" stopColor="#63CCEA" />
          <stop offset=".8555" stopColor="#63CCEA" />
          <stop offset=".8594" stopColor="#63CDEA" />
          <stop offset=".8633" stopColor="#63CDE9" />
          <stop offset=".8672" stopColor="#62CEE9" />
          <stop offset=".8711" stopColor="#62CEE9" />
          <stop offset=".875" stopColor="#62CFE9" />
          <stop offset=".8789" stopColor="#62D0E9" />
          <stop offset=".8828" stopColor="#62D0E9" />
          <stop offset=".8867" stopColor="#61D1E9" />
          <stop offset=".8906" stopColor="#61D1E9" />
          <stop offset=".8945" stopColor="#61D2E9" />
          <stop offset=".8984" stopColor="#61D2E9" />
          <stop offset=".9023" stopColor="#61D3E8" />
          <stop offset=".9063" stopColor="#61D4E8" />
          <stop offset=".9102" stopColor="#60D4E8" />
          <stop offset=".9141" stopColor="#60D5E8" />
          <stop offset=".918" stopColor="#60D5E8" />
          <stop offset=".9219" stopColor="#60D6E8" />
          <stop offset=".9258" stopColor="#60D6E8" />
          <stop offset=".9297" stopColor="#5FD7E8" />
          <stop offset=".9336" stopColor="#5FD7E8" />
          <stop offset=".9375" stopColor="#5FD8E8" />
          <stop offset=".9414" stopColor="#5FD9E7" />
          <stop offset=".9453" stopColor="#5FD9E7" />
          <stop offset=".9492" stopColor="#5EDAE7" />
          <stop offset=".9531" stopColor="#5EDAE7" />
          <stop offset=".957" stopColor="#5EDBE7" />
          <stop offset=".9609" stopColor="#5EDBE7" />
          <stop offset=".9648" stopColor="#5EDCE7" />
          <stop offset=".9688" stopColor="#5EDCE7" />
          <stop offset=".9727" stopColor="#5DDDE7" />
          <stop offset=".9766" stopColor="#5DDEE7" />
          <stop offset=".9805" stopColor="#5DDEE6" />
          <stop offset=".9844" stopColor="#5DDFE6" />
          <stop offset=".9883" stopColor="#5DDFE6" />
          <stop offset=".9922" stopColor="#5CE0E6" />
          <stop offset=".9961" stopColor="#5CE0E6" />
          <stop offset="1" stopColor="#5CE1E6" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="0"
          x2="256"
          y1="128"
          y2="128"
          gradientTransform="translate(125.0957 125.0957) scale(.48753)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" />
          <stop offset=".0039" stopColor="#000001" />
          <stop offset=".0078" stopColor="#000002" />
          <stop offset=".0117" stopColor="#010102" />
          <stop offset=".0156" stopColor="#010103" />
          <stop offset=".0195" stopColor="#010104" />
          <stop offset=".0234" stopColor="#010105" />
          <stop offset=".0273" stopColor="#010106" />
          <stop offset=".0313" stopColor="#020206" />
          <stop offset=".0352" stopColor="#020207" />
          <stop offset=".0391" stopColor="#020208" />
          <stop offset=".043" stopColor="#020209" />
          <stop offset=".0469" stopColor="#02020A" />
          <stop offset=".0508" stopColor="#03030A" />
          <stop offset=".0547" stopColor="#03030B" />
          <stop offset=".0586" stopColor="#03030C" />
          <stop offset=".0625" stopColor="#03030D" />
          <stop offset=".0664" stopColor="#04030E" />
          <stop offset=".0703" stopColor="#04040E" />
          <stop offset=".0742" stopColor="#04040F" />
          <stop offset=".0781" stopColor="#040410" />
          <stop offset=".082" stopColor="#040411" />
          <stop offset=".0859" stopColor="#050412" />
          <stop offset=".0898" stopColor="#050512" />
          <stop offset=".0938" stopColor="#050513" />
          <stop offset=".0977" stopColor="#050514" />
          <stop offset=".1016" stopColor="#050515" />
          <stop offset=".1055" stopColor="#060516" />
          <stop offset=".1094" stopColor="#060616" />
          <stop offset=".1133" stopColor="#060617" />
          <stop offset=".1172" stopColor="#060618" />
          <stop offset=".1211" stopColor="#060619" />
          <stop offset=".125" stopColor="#07061A" />
          <stop offset=".1289" stopColor="#07071A" />
          <stop offset=".1328" stopColor="#07071B" />
          <stop offset=".1367" stopColor="#07071C" />
          <stop offset=".1406" stopColor="#07071D" />
          <stop offset=".1445" stopColor="#08071E" />
          <stop offset=".1484" stopColor="#08081E" />
          <stop offset=".1523" stopColor="#08081F" />
          <stop offset=".1563" stopColor="#080820" />
          <stop offset=".1602" stopColor="#080821" />
          <stop offset=".1641" stopColor="#090822" />
          <stop offset=".168" stopColor="#090922" />
          <stop offset=".1719" stopColor="#090923" />
          <stop offset=".1758" stopColor="#090924" />
          <stop offset=".1797" stopColor="#0A0925" />
          <stop offset=".1836" stopColor="#0A0926" />
          <stop offset=".1875" stopColor="#0A0A26" />
          <stop offset=".1914" stopColor="#0A0A27" />
          <stop offset=".1953" stopColor="#0A0A28" />
          <stop offset=".1992" stopColor="#0B0A29" />
          <stop offset=".2031" stopColor="#0B0A2A" />
          <stop offset=".207" stopColor="#0B0B2A" />
          <stop offset=".2109" stopColor="#0B0B2B" />
          <stop offset=".2148" stopColor="#0B0B2C" />
          <stop offset=".2188" stopColor="#0C0B2D" />
          <stop offset=".2227" stopColor="#0C0B2E" />
          <stop offset=".2266" stopColor="#0C0C2E" />
          <stop offset=".2305" stopColor="#0C0C2F" />
          <stop offset=".2344" stopColor="#0C0C30" />
          <stop offset=".2383" stopColor="#0D0C31" />
          <stop offset=".2422" stopColor="#0D0C32" />
          <stop offset=".2461" stopColor="#0D0D32" />
          <stop offset=".25" stopColor="#0D0D33" />
          <stop offset=".2539" stopColor="#0D0D34" />
          <stop offset=".2578" stopColor="#0E0D35" />
          <stop offset=".2617" stopColor="#0E0D36" />
          <stop offset=".2656" stopColor="#0E0E36" />
          <stop offset=".2695" stopColor="#0E0E37" />
          <stop offset=".2734" stopColor="#0F0E38" />
          <stop offset=".2773" stopColor="#0F0E39" />
          <stop offset=".2813" stopColor="#0F0E3A" />
          <stop offset=".2852" stopColor="#0F0F3A" />
          <stop offset=".2891" stopColor="#0F0F3B" />
          <stop offset=".293" stopColor="#100F3C" />
          <stop offset=".2969" stopColor="#100F3D" />
          <stop offset=".3008" stopColor="#100F3E" />
          <stop offset=".3047" stopColor="#10103E" />
          <stop offset=".3086" stopColor="#10103F" />
          <stop offset=".3125" stopColor="#111040" />
          <stop offset=".3164" stopColor="#111041" />
          <stop offset=".3203" stopColor="#111042" />
          <stop offset=".3242" stopColor="#111142" />
          <stop offset=".3281" stopColor="#111143" />
          <stop offset=".332" stopColor="#121144" />
          <stop offset=".3359" stopColor="#121145" />
          <stop offset=".3398" stopColor="#121146" />
          <stop offset=".3438" stopColor="#121246" />
          <stop offset=".3477" stopColor="#121247" />
          <stop offset=".3516" stopColor="#131248" />
          <stop offset=".3555" stopColor="#131249" />
          <stop offset=".3594" stopColor="#13124A" />
          <stop offset=".3633" stopColor="#13134A" />
          <stop offset=".3672" stopColor="#13134B" />
          <stop offset=".3711" stopColor="#14134C" />
          <stop offset=".375" stopColor="#14134D" />
          <stop offset=".3789" stopColor="#14134E" />
          <stop offset=".3828" stopColor="#14144E" />
          <stop offset=".3867" stopColor="#15144F" />
          <stop offset=".3906" stopColor="#151450" />
          <stop offset=".3945" stopColor="#151451" />
          <stop offset=".3984" stopColor="#151452" />
          <stop offset=".4023" stopColor="#151552" />
          <stop offset=".4063" stopColor="#161553" />
          <stop offset=".4102" stopColor="#161554" />
          <stop offset=".4141" stopColor="#161555" />
          <stop offset=".418" stopColor="#161556" />
          <stop offset=".4219" stopColor="#161656" />
          <stop offset=".4258" stopColor="#171657" />
          <stop offset=".4297" stopColor="#171658" />
          <stop offset=".4336" stopColor="#171659" />
          <stop offset=".4375" stopColor="#17165A" />
          <stop offset=".4414" stopColor="#17175A" />
          <stop offset=".4453" stopColor="#18175B" />
          <stop offset=".4492" stopColor="#18175C" />
          <stop offset=".4531" stopColor="#18175D" />
          <stop offset=".457" stopColor="#18175E" />
          <stop offset=".4609" stopColor="#18185F" />
          <stop offset=".4648" stopColor="#19185F" />
          <stop offset=".4688" stopColor="#191860" />
          <stop offset=".4727" stopColor="#191861" />
          <stop offset=".4766" stopColor="#191862" />
          <stop offset=".4805" stopColor="#191963" />
          <stop offset=".4844" stopColor="#1A1963" />
          <stop offset=".4883" stopColor="#1A1964" />
          <stop offset=".4922" stopColor="#1A1965" />
          <stop offset=".4961" stopColor="#1A1966" />
          <stop offset=".5" stopColor="#1B1967" />
          <stop offset=".5039" stopColor="#1B1A67" />
          <stop offset=".5078" stopColor="#1B1A68" />
          <stop offset=".5117" stopColor="#1B1A69" />
          <stop offset=".5156" stopColor="#1B1A6A" />
          <stop offset=".5195" stopColor="#1C1A6B" />
          <stop offset=".5234" stopColor="#1C1B6B" />
          <stop offset=".5273" stopColor="#1C1B6C" />
          <stop offset=".5313" stopColor="#1C1B6D" />
          <stop offset=".5352" stopColor="#1C1B6E" />
          <stop offset=".5391" stopColor="#1D1B6F" />
          <stop offset=".543" stopColor="#1D1C6F" />
          <stop offset=".5469" stopColor="#1D1C70" />
          <stop offset=".5508" stopColor="#1D1C71" />
          <stop offset=".5547" stopColor="#1D1C72" />
          <stop offset=".5586" stopColor="#1E1C73" />
          <stop offset=".5625" stopColor="#1E1D73" />
          <stop offset=".5664" stopColor="#1E1D74" />
          <stop offset=".5703" stopColor="#1E1D75" />
          <stop offset=".5742" stopColor="#1E1D76" />
          <stop offset=".5781" stopColor="#1F1D77" />
          <stop offset=".582" stopColor="#1F1E77" />
          <stop offset=".5859" stopColor="#1F1E78" />
          <stop offset=".5898" stopColor="#1F1E79" />
          <stop offset=".5938" stopColor="#1F1E7A" />
          <stop offset=".5977" stopColor="#201E7B" />
          <stop offset=".6016" stopColor="#201F7B" />
          <stop offset=".6055" stopColor="#201F7C" />
          <stop offset=".6094" stopColor="#201F7D" />
          <stop offset=".6133" stopColor="#211F7E" />
          <stop offset=".6172" stopColor="#211F7F" />
          <stop offset=".6211" stopColor="#21207F" />
          <stop offset=".625" stopColor="#212080" />
          <stop offset=".6289" stopColor="#212081" />
          <stop offset=".6328" stopColor="#222082" />
          <stop offset=".6367" stopColor="#222083" />
          <stop offset=".6406" stopColor="#222183" />
          <stop offset=".6445" stopColor="#222184" />
          <stop offset=".6484" stopColor="#222185" />
          <stop offset=".6523" stopColor="#232186" />
          <stop offset=".6563" stopColor="#232187" />
          <stop offset=".6602" stopColor="#232287" />
          <stop offset=".6641" stopColor="#232288" />
          <stop offset=".668" stopColor="#232289" />
          <stop offset=".6719" stopColor="#24228A" />
          <stop offset=".6758" stopColor="#24228B" />
          <stop offset=".6797" stopColor="#24238B" />
          <stop offset=".6836" stopColor="#24238C" />
          <stop offset=".6875" stopColor="#24238D" />
          <stop offset=".6914" stopColor="#25238E" />
          <stop offset=".6953" stopColor="#25238F" />
          <stop offset=".6992" stopColor="#25248F" />
          <stop offset=".7031" stopColor="#252490" />
          <stop offset=".707" stopColor="#252491" />
          <stop offset=".7109" stopColor="#262492" />
          <stop offset=".7148" stopColor="#262493" />
          <stop offset=".7188" stopColor="#262593" />
          <stop offset=".7227" stopColor="#262594" />
          <stop offset=".7266" stopColor="#272595" />
          <stop offset=".7305" stopColor="#272596" />
          <stop offset=".7344" stopColor="#272597" />
          <stop offset=".7383" stopColor="#272697" />
          <stop offset=".7422" stopColor="#272698" />
          <stop offset=".7461" stopColor="#282699" />
          <stop offset=".75" stopColor="#28269A" />
          <stop offset=".7539" stopColor="#28269B" />
          <stop offset=".7578" stopColor="#28279B" />
          <stop offset=".7617" stopColor="#28279C" />
          <stop offset=".7656" stopColor="#29279D" />
          <stop offset=".7695" stopColor="#29279E" />
          <stop offset=".7734" stopColor="#29279F" />
          <stop offset=".7773" stopColor="#29289F" />
          <stop offset=".7813" stopColor="#2928A0" />
          <stop offset=".7852" stopColor="#2A28A1" />
          <stop offset=".7891" stopColor="#2A28A2" />
          <stop offset=".793" stopColor="#2A28A3" />
          <stop offset=".7969" stopColor="#2A29A3" />
          <stop offset=".8008" stopColor="#2A29A4" />
          <stop offset=".8047" stopColor="#2B29A5" />
          <stop offset=".8086" stopColor="#2B29A6" />
          <stop offset=".8125" stopColor="#2B29A7" />
          <stop offset=".8164" stopColor="#2B2AA7" />
          <stop offset=".8203" stopColor="#2C2AA8" />
          <stop offset=".8242" stopColor="#2C2AA9" />
          <stop offset=".8281" stopColor="#2C2AAA" />
          <stop offset=".832" stopColor="#2C2AAB" />
          <stop offset=".8359" stopColor="#2C2BAB" />
          <stop offset=".8398" stopColor="#2D2BAC" />
          <stop offset=".8438" stopColor="#2D2BAD" />
          <stop offset=".8477" stopColor="#2D2BAE" />
          <stop offset=".8516" stopColor="#2D2BAF" />
          <stop offset=".8555" stopColor="#2D2CAF" />
          <stop offset=".8594" stopColor="#2E2CB0" />
          <stop offset=".8633" stopColor="#2E2CB1" />
          <stop offset=".8672" stopColor="#2E2CB2" />
          <stop offset=".8711" stopColor="#2E2CB3" />
          <stop offset=".875" stopColor="#2E2DB3" />
          <stop offset=".8789" stopColor="#2F2DB4" />
          <stop offset=".8828" stopColor="#2F2DB5" />
          <stop offset=".8867" stopColor="#2F2DB6" />
          <stop offset=".8906" stopColor="#2F2DB7" />
          <stop offset=".8945" stopColor="#2F2EB7" />
          <stop offset=".8984" stopColor="#302EB8" />
          <stop offset=".9023" stopColor="#302EB9" />
          <stop offset=".9063" stopColor="#302EBA" />
          <stop offset=".9102" stopColor="#302EBB" />
          <stop offset=".9141" stopColor="#302FBB" />
          <stop offset=".918" stopColor="#312FBC" />
          <stop offset=".9219" stopColor="#312FBD" />
          <stop offset=".9258" stopColor="#312FBE" />
          <stop offset=".9297" stopColor="#312FBF" />
          <stop offset=".9336" stopColor="#3230BF" />
          <stop offset=".9375" stopColor="#3230C0" />
          <stop offset=".9414" stopColor="#3230C1" />
          <stop offset=".9453" stopColor="#3230C2" />
          <stop offset=".9492" stopColor="#3230C3" />
          <stop offset=".9531" stopColor="#3331C3" />
          <stop offset=".957" stopColor="#3331C4" />
          <stop offset=".9609" stopColor="#3331C5" />
          <stop offset=".9648" stopColor="#3331C6" />
          <stop offset=".9688" stopColor="#3331C7" />
          <stop offset=".9727" stopColor="#3432C7" />
          <stop offset=".9766" stopColor="#3432C8" />
          <stop offset=".9805" stopColor="#3432C9" />
          <stop offset=".9844" stopColor="#3432CA" />
          <stop offset=".9883" stopColor="#3432CB" />
          <stop offset=".9922" stopColor="#3533CB" />
          <stop offset=".9961" stopColor="#3533CC" />
          <stop offset="1" stopColor="#3533CD" />
        </linearGradient>
        <path d="M-37.5-37.5h450v450h-450z" />
        <path fill="#none" d="M-37.5-37.5h450v450h-450z" />
        <g clipPath="url(#a)">
          <g clipPath="url(#b)">
            <path fill="url(#c)" d="M107.25 107.25v160.5h160.5v-160.5Zm0 0" />
          </g>
        </g>
        <g clipPath="url(#d)">
          <g clipPath="url(#e)">
            <path
              fill="url(#f)"
              d="M125.0977 125.0977v124.8046h124.8046V125.0977Zm0 0"
            />
          </g>
        </g>
        <path
          fill="#fff"
          d="M163.0297 193.0312V210h-9.75v-48.2656h16.4531c4.7695 0 8.5703 1.4843 11.4063 4.453 2.8437 2.961 4.2656 6.8048 4.2656 11.5313 0 4.7305-1.4063 8.4649-4.2188 11.2032-2.8047 2.7421-6.6875 4.1093-11.6562 4.1093Zm0-8.125h6.7031c1.8516 0 3.2852-.6015 4.2969-1.8125 1.0195-1.2187 1.5312-2.9882 1.5312-5.3125 0-2.4062-.5234-4.3203-1.5625-5.75-1.043-1.4257-2.4336-2.1484-4.1718-2.1718h-6.797Zm42.4609 6.4688-3.8437 4.8281V210h-9.75v-48.2656h9.75v21.0468l3.0781-5.203 8.9844-15.8438h11.9375l-13.8281 21.2187L225.8813 210H214.303Zm0 0"
        />
      </motion.svg>
    </div>
  );
};

export default Loading;
