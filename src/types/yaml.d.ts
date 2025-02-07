declare module '*.yaml' {
  const content: {
    sections: {
      personalInfo: {
        title: string;
        name: string;
        email: string;
        phone: string;
      };
      education: {
        title: string;
        university: string;
        major: string;
        period: string;
        courses: string;
        coursesList: string;
      };
      skills: {
        title: string;
        programming: string;
        programmingList: string;
        frameworks: string;
        frameworksList: string;
        tools: string;
        toolsList: string;
      };
    };
  };
  export default content;
} 