import type { Schema, Struct } from '@strapi/strapi';

export interface CertficationsCertfications extends Struct.ComponentSchema {
  collectionName: 'components_certfications_certfications';
  info: {
    displayName: 'certfications';
    icon: 'code';
  };
  attributes: {
    certificate: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'emotionHappy';
  };
  attributes: {
    achievements: Schema.Attribute.Text;
    degree: Schema.Attribute.String;
    eduId: Schema.Attribute.Integer;
    endDate: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'alien';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    expId: Schema.Attribute.Integer;
    positionTitle: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    summery: Schema.Attribute.Text;
  };
}

export interface InterestsInterests extends Struct.ComponentSchema {
  collectionName: 'components_interests_interests';
  info: {
    displayName: 'interests';
    icon: 'book';
  };
  attributes: {
    interest: Schema.Attribute.String;
  };
}

export interface LanguagesLanguages extends Struct.ComponentSchema {
  collectionName: 'components_languages_languages';
  info: {
    displayName: 'languages';
    icon: 'clock';
  };
  attributes: {
    language: Schema.Attribute.String;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'archive';
  };
  attributes: {
    projectDescription: Schema.Attribute.Text;
    projectTitle: Schema.Attribute.String;
    technologies: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    description: '';
    displayName: 'skills';
    icon: 'book';
  };
  attributes: {
    skill: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certfications.certfications': CertficationsCertfications;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'interests.interests': InterestsInterests;
      'languages.languages': LanguagesLanguages;
      'projects.projects': ProjectsProjects;
      'skills.skills': SkillsSkills;
    }
  }
}
