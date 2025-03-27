'use client';

import { useState } from "react";
import MagicButton from './ui/MagicButton';
import { FiSend } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { texts } from '@/app/data';

const ContactMe = () => {
  const email = texts.EMAIL;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center">
      <p className="text-neutral-300 text-sm">
        {texts.CONTACT}
      </p>
      <div className="mb-24">
        <MagicButton
          title={copied ? texts.COPIED : texts.CONTACT_BUTTON}
          icon={copied ? <FaCheck size={16} /> : <FiSend size={16} />}
          position="right"
          width={165}
          otherClasses={`border ${
            copied
              ? 'border-green-500 bg-green-600'
              : 'border-purple-500 hover:bg-purple-600'
          } transition mt-5`}
          handleClick={handleCopy}
        />
      </div>
    </div>
  );
};

export default ContactMe;
