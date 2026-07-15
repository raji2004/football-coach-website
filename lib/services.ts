export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  video: string;
  tagline: string;
  summary: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "youth-training",
    title: "Youth Training",
    description: "Ages 6-18 • Position-specific drills",
    image: "/youth-training.jpeg?v=p1",
    video: "/videos/youth_training.mp4",
    tagline: "Build confidence, technique, and love for the game",
    summary:
      "Youth sessions are designed for players aged 6–18 who want to grow in a positive, structured environment. Every session focuses on the fundamentals that matter at each stage — ball control, movement, decision-making, and game understanding — so young players improve week after week without pressure.",
    offerings: [
      "Age-appropriate drills for ages 6–18",
      "Technical fundamentals: first touch, dribbling, passing",
      "Position-specific sessions as players develop",
      "Confidence, discipline, and healthy competition",
      "Clear progress tracking and constructive feedback",
    ],
  },
  {
    slug: "adult-coaching",
    title: "Adult Coaching",
    description: "Ages 19-30 • Advanced techniques",
    image: "/adult-coaching.jpeg?v=p1",
    video: "/videos/adult_coaching.mp4",
    tagline: "Sharpen your game with focused adult sessions",
    summary:
      "Adult coaching is built for players aged 19–30 who want more than casual kickabouts. Sessions target advanced technical work, smarter decision-making under pressure, and match-realistic scenarios so you leave each session sharper and more confident.",
    offerings: [
      "Advanced technical and tactical training",
      "Match-scenario drills under pressure",
      "Strengths analysis and improvement plans",
      "Flexible one-to-one or small group options",
      "Fitness elements tailored to adult athletes",
    ],
  },
  {
    slug: "position-mastery",
    title: "Position Mastery",
    description: "CB, RB, LWB, RWB, LB • Expert guidance",
    image: "/position-mastery.jpeg?v=p1",
    video: "/videos/position_mastery.mp4",
    tagline: "Become elite in your position",
    summary:
      "Position Mastery drills dig deep into the roles that win matches: centre back, full back, and wing back. You’ll work on positional awareness, defending 1v1, recovery runs, delivering quality balls, and the reading of the game that separates average defenders from reliable starters.",
    offerings: [
      "Dedicated work for CB, RB, LB, RWB & LWB",
      "1v1 defending and body positioning",
      "Crossing, delivery, and attacking support play",
      "Tactical positioning and game reading",
      "Patterns used in modern defensive systems",
    ],
  },
  {
    slug: "group-sessions",
    title: "Group Sessions",
    description: "Team building • Match preparation",
    image: "/group-session.jpeg?v=p1",
    video: "/videos/group_sessions.mp4",
    tagline: "Train together. Compete as one.",
    summary:
      "Group sessions bring players together for team-focused training — communication, shape, pressing, and match prep. Ideal for small squads, friendship groups, or players who want that competitive, game-like intensity with others at a similar level.",
    offerings: [
      "Team shapes, pressing, and transitions",
      "Communication and on-pitch leadership",
      "Match preparation and set-piece work",
      "Small-sided games with coaching feedback",
      "Team bonding in a high-energy session",
    ],
  },
  {
    slug: "fitness-training",
    title: "Fitness Training",
    description: "Strength & conditioning • Speed & agility",
    image: "/fitness-training.jpeg?v=p1",
    video: "/videos/fitness_training.mp4",
    tagline: "Speed, strength, and stamina for football",
    summary:
      "Fitness Training builds the athletic base every footballer needs: acceleration, agility, endurance, and injury resilience. Sessions use football-specific conditioning so the work you do off the ball shows up when the ball is at your feet.",
    offerings: [
      "Speed, acceleration, and agility drills",
      "Football-specific strength & conditioning",
      "Endurance and recovery work",
      "Mobility and injury-prevention routines",
      "Programmes adapted to your current fitness",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
