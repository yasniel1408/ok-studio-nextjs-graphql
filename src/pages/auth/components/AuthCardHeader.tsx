import Image from 'next/image';
import React from 'react';
import { Button, CardHeader } from 'reactstrap';

import githubImage from '../../../assets/img/icons/common/github.svg';
import googleImage from '../../../assets/img/icons/common/google.svg';

export const AuthCardHeader = () => {
  return (
    <CardHeader className="bg-transparent pb-5">
      <div className="text-muted text-center mt-2 mb-4">
        <small>Sign up with</small>
      </div>
      <div className="text-center">
        <Button
          className="btn-neutral btn-icon mr-4"
          color="default"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <span className="btn-inner--icon">
            <Image width={15} height={15} alt="..." src={githubImage} />
          </span>
          <span className="btn-inner--text">Github</span>
        </Button>
        <Button
          className="btn-neutral btn-icon"
          color="default"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <span className="btn-inner--icon">
            <Image width={15} height={15} alt="..." src={googleImage} />
          </span>
          <span className="btn-inner--text">Google</span>
        </Button>
      </div>
    </CardHeader>
  );
};
