import { ReactNode } from "react";

export interface ITeacherProps {
  name: string;
  workPosition: string;
  photo: any;
  connect: string;
}

export interface IChildrenProps {
  children: ReactNode;
}

export interface IEventsProps {
  isDark: boolean;
  eventCategory: string;
  eventName: string;
  eventDesc: string;
  eventDate: string;
  guests: Array<{
    id: number;
    guestName: string;
    guestWorkingPosition: string;
    connect: string;
    photo: any;
  }>;
  price: number;
  linkForLearnMore: string;
}

// export interface I
export interface IQAProps {
  question: string;
  answer: string;
  isVisible: boolean;
  onClick: () => void;
}

export interface IStepProps {
  stepTitle: string;
  stepType: string;
  stepDetail: string;
}

export interface INavbarProps {
  isDark: boolean;
}

export interface IStudentsInfoProps {
  studentName: string;
  desc: string;
  videoUrl: string;
  coverPhoto: any;
  category?: number | string;
  github?: string;
  connect?: string;
}

export interface IMutualChoicesProps {
  icon: string;
  title: string;
  desc: string;
}
