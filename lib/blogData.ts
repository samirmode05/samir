export const blogPosts = [
  {
  title: "When a Friendship Ends Without Goodbye",
  slug: "friendship",
  date: "2025-01-12",
  description: "A Story of Unspoken Emotions",
  content: `
<h2 class="text-xl font-semibold mt-4 mb-2">
🌙 When a Friendship Ends Without Goodbye: A Story of Unspoken Emotions
</h2>

<p class="mb-4">
Friendship is one of the most unpredictable relationships in life. Sometimes it grows slowly
over years, and sometimes it forms instantly, as if the universe quietly ties two people together
with invisible threads. This is the story of one such bond — pure, effortless, and meaningful —
and how it ended without a goodbye.
</p>

<p class="mb-4">
For more than a year, two people shared a beautiful connection. They were not lovers, they had no
unspoken promises, and no dramatic confessions. Just a simple, honest friendship. They talked
every day — from the first good morning to the last good night. They shared their goals, fears,
little victories, and daily struggles. They supported each other through exams, health issues, and
difficult days.
</p>

<p class="mb-4">
The bond grew organically. He admired her simplicity, her sincerity, her focus on studies, and
how she preferred peace over chaos. She appreciated his support, his calm nature, and the way he
always encouraged her dreams. He made thoughtful efforts — small surprises, kind words,
occasional gifts, even building little things to make her smile. Their conversations were warm,
consistent, and comforting.
</p>

<p class="mb-4">
But life, as it often does, began to change quietly.
</p>

<p class="mb-4">
One day, she grew distant. Not intentionally cruel — just silent, unavailable, unread. Messages
that once received instant replies now stayed unseen. Calls that once sparked joy were declined.
Stories and posts were ignored. All without a clear reason, without a conversation.
</p>

<p class="mb-4">
He tried understanding, tried asking softly if anything was wrong, tried giving space. But the
silence grew louder. And then came a single message — abrupt, cold, final. She said she couldn't
talk anymore. That someone in her life did not like their friendship, and she had to end it
immediately. No call, no explanation, just a line followed by a block.
</p>

<p class="mb-4">
He was shocked. Not because the friendship ended, but because the way it ended lacked the respect
the bond once held.
</p>

<p class="mb-4">
He wasn’t angry. Just deeply hurt.  
He had never crossed any boundaries.  
He never proposed.  
He only valued a friendship that once felt mutual and genuine.
</p>

<p class="mb-4">
His emotions reacted before his mind could understand. He called her a few times — not out of
obsession, but out of confusion, out of the suddenness of it all. He simply wanted one honest
conversation, one moment of clarity, one gentle closure. But the call was cut the moment she heard
his voice.
</p>

<p class="mb-4">
That was the moment he realized something important:<br />
<strong>Some endings will never give you answers.</strong>
</p>

<p class="mb-4">
He reflected on where he might have gone wrong. Maybe he cared too much. Maybe he held on too
tightly when things fell apart too quickly. Maybe his emotional responses were misunderstood as
pressure. He wasn’t perfect, but he was genuine.
</p>

<p class="mb-4">
And genuineness, even if misunderstood, is never a mistake.
</p>

<p class="mb-4">
Despite the pain, he carried no hatred. He knew her life had shifted — new people, new
influences, new priorities. He respected that. All he wished was that she had ended it with the
same kindness with which it began.
</p>

<p class="mb-4">
So he stepped back, quietly, with dignity.  
He focused on his career, his growth, his opportunities.  
Life rewarded him — jobs, travel, experiences, and new beginnings.
</p>

<p class="mb-4">
Yet, he never forgot the friendship. Not because he was stuck in the past, but because the past
had shaped him.
</p>

<p class="mb-4">
He wrote his apology — not to send, but to release the weight on his heart. He accepted that
closure does not always come from the other person. Sometimes, closure is the message you write
and never deliver.
</p>

<p class="mb-4">
Today, he wishes her well — truly, sincerely.  
He hopes she achieves her dreams, whether in a forest uniform, a research lab, or a new city
across the world. He hopes she becomes everything she once spoke about with shining eyes.
</p>

<p class="mb-4">
Some friendships end, but their memories remain as soft echoes — reminding us of who we were, and
how deeply we once cared.
</p>

<p class="mb-4">
And that is enough.
</p>

  `,
},
  {
    title: "How I Built an AI Timetable Generator (SIH Project)",
    slug: "ai-timetable-generator",
    date: "2025-08-15",
    description:
      "Behind the scenes of how I used Genetic Algorithms and FastAPI to build NEP-compliant timetable generator.",
    image: "/blog1.jpg",
    content: `
<h2 class="text-xl font-semibold mt-4 mb-2">Introduction</h2>

<p class="mb-4">
During my Smart India Hackathon (SIH) project, my team and I faced a complex scheduling
challenge: how do we automatically generate conflict-free timetables for colleges
while satisfying hundreds of academic, infrastructural, and NEP-based constraints?
</p>

<p class="mb-4">
A typical timetable involves multiple departments, subjects, faculty availability,
classroom capacities, lab requirements, and optional courses. Creating this manually
can take days and still lead to clashes. This inspired me to build an AI-driven
Timetable Generator capable of producing optimized schedules in minutes.
</p>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Why a Genetic Algorithm?</h2>

<p class="mb-4">
Timetabling is a mix of constraint satisfaction and optimization. Traditional
approaches break down because the search space is massive, hard constraints must
always be met, and soft constraints improve the overall quality.
</p>

<ul class="list-disc ml-6 mb-4">
  <li>The search space is huge (millions of combinations)</li>
  <li>Hard constraints must always be satisfied</li>
  <li>Soft constraints improve timetable quality</li>
</ul>

<p class="mb-4">
Genetic Algorithms (GAs) excel because they explore large solution spaces, evolve
solutions over generations, and avoid local optima through mutation and crossover.
</p>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">System Architecture</h2>

<h3 class="text-lg font-semibold mt-3 mb-2">Backend</h3>
<ul class="list-disc ml-6 mb-4">
  <li>FastAPI for high-performance APIs</li>
  <li>DEAP for Genetic Algorithms</li>
  <li>NumPy & Pandas for constraint evaluation</li>
  <li>PostgreSQL / Supabase for data storage</li>
</ul>

<h3 class="text-lg font-semibold mt-3 mb-2">Frontend</h3>
<ul class="list-disc ml-6 mb-4">
  <li>React-based interface</li>
  <li>Visual timetable preview</li>
  <li>CSV / Excel export</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">How the Algorithm Works</h2>

<h3 class="text-lg font-semibold mt-3 mb-2">Chromosome Structure</h3>
<p class="mb-4">
Each chromosome represents a full timetable encoded as:
<strong>course → faculty → room → day → time slot</strong>
</p>

<h3 class="text-lg font-semibold mt-3 mb-2">Selection</h3>
<p class="mb-4">Tournament selection picks the best-performing schedules.</p>

<h3 class="text-lg font-semibold mt-3 mb-2">Crossover</h3>
<p class="mb-4">Swapping timetable segments creates new potential solutions.</p>

<h3 class="text-lg font-semibold mt-3 mb-2">Mutation</h3>
<p class="mb-4">Random adjustments maintain diversity in the population.</p>

<h3 class="text-lg font-semibold mt-3 mb-2">Fitness Calculation</h3>
<p class="mb-4">Penalties are applied for:</p>

<ul class="list-disc ml-6 mb-4">
  <li>Faculty clashes</li>
  <li>Room double-booking</li>
  <li>Student group overlaps</li>
  <li>Non-consecutive lab slots</li>
  <li>Overfilled classrooms</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Results</h2>

<ul class="list-disc ml-6 mb-4">
  <li>Timetable generation time reduced by <strong>95%</strong></li>
  <li>Zero hard-constraint violations in most runs</li>
  <li>NEP-compliant scheduling with optional courses</li>
  <li>Scales to large institutions</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Conclusion</h2>

<p class="mb-4">
Building this AI Timetable Generator helped me combine Genetic Algorithms, FastAPI,
optimization logic, and full-stack engineering to solve a real-world scheduling problem.
It remains one of my most impactful and technically challenging projects.
</p>


    `,
  },
  {
    title: "Building a Face Detection E-Voting System",
    slug: "face-detection-evoting",
    date: "2024-12-10",
    description:
      "A secure voting system using OpenCV face recognition + web authentication.",
    image: "/blog2.jpg",
    content: `
      <h2 class="text-xl font-semibold mt-4 mb-2">Introduction</h2>

<p class="mb-4">
Traditional voting systems often face issues such as identity fraud, duplicate voting, manual
verification delays, and dependency on physical documents. To solve these challenges, I built a
Face Detection E-Voting System — a secure digital voting platform that uses computer vision and
liveness detection to authenticate voters before they cast their vote.
</p>

<p class="mb-4">
The primary goal was to create a system where each user can vote <strong>only once</strong>, voting is
authenticated using <strong>real-time facial recognition</strong>, and the resulting process is both
transparent and tamper-proof.
</p>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Why Face Detection for Voting?</h2>

<p class="mb-4">
Using face recognition significantly increases the security and reliability of an online voting
system. Unlike passwords or ID cards, facial biometrics cannot be shared, lost, or easily forged.
This ensures:
</p>

<ul class="list-disc ml-6 mb-4">
  <li>Elimination of fake or duplicate voters</li>
  <li>Real-time validation without manual checking</li>
  <li>More accessible, user-friendly voting</li>
  <li>Improved security over OTP- or document-based systems</li>
</ul>

<p class="mb-4">
By integrating liveness detection (eye-blink detection, head movement, etc.), the system can also
prevent spoofing attempts such as using printed photos or videos.
</p>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">System Architecture</h2>

<h3 class="text-lg font-semibold mt-3 mb-2">Frontend</h3>
<ul class="list-disc ml-6 mb-4">
  <li>Webcam-based face capture</li>
  <li>Live preview before verification</li>
  <li>Secure session handling for authenticated users</li>
</ul>

<h3 class="text-lg font-semibold mt-3 mb-2">Backend</h3>
<ul class="list-disc ml-6 mb-4">
  <li>FastAPI for API endpoints</li>
  <li>Face recognition using OpenCV + pre-trained models</li>
  <li>Database for voters, votes, and session logging</li>
</ul>

<h3 class="text-lg font-semibold mt-3 mb-2">Database</h3>
<ul class="list-disc ml-6 mb-4">
  <li>Voter Profiles (name, ID, face encoding)</li>
  <li>Votes (candidate selected, timestamp)</li>
  <li>Audit logs for tracking all activity</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">How the Face Detection Works</h2>

<h3 class="text-lg font-semibold mt-3 mb-2">1. Face Capture</h3>
<p class="mb-4">
The webcam captures a real-time image of the voter. The system checks for proper lighting,
framing, and clarity to ensure a high-quality detection.
</p>

<h3 class="text-lg font-semibold mt-3 mb-2">2. Face Encoding</h3>
<p class="mb-4">
The image is processed through a deep learning model (like FaceNet or dlib's face encoder), which
converts the face into a numerical vector encoding representing unique facial features.
</p>

<h3 class="text-lg font-semibold mt-3 mb-2">3. Matching</h3>
<p class="mb-4">
The generated vector is compared with stored face encodings in the database. If the match score is
above the defined threshold, the user is authenticated.
</p>

<h3 class="text-lg font-semibold mt-3 mb-2">4. Liveness Detection</h3>
<p class="mb-4">
To prevent spoofing using images or videos, the system checks for:
</p>

<ul class="list-disc ml-6 mb-4">
  <li>Blinks</li>
  <li>Head turns</li>
  <li>Facial expression changes</li>
  <li>Depth estimation (optional)</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Voting Flow</h2>

<ol class="list-decimal ml-6 mb-4">
  <li>User logs in using their voter ID.</li>
  <li>System prompts real-time face verification.</li>
  <li>Face match + liveness check is performed.</li>
  <li>If approved, the voter is redirected to the voting page.</li>
  <li>User selects their candidate and submits the vote.</li>
  <li>System records the vote securely and prevents re-voting.</li>
</ol>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Security Features</h2>

<ul class="list-disc ml-6 mb-4">
  <li><strong>One person, one vote</strong> — after voting, the user is locked from re-voting</li>
  <li><strong>Encrypted facial data</strong> stored as encodings, not raw images</li>
  <li>Automatic detection of spoofing attempts</li>
  <li>Audit logs for transparency and traceability</li>
  <li>Secure database transactions</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Results</h2>

<ul class="list-disc ml-6 mb-4">
  <li>Accurate voter authentication with real-time face recognition</li>
  <li>Elimination of fake or duplicate entries</li>
  <li>Smooth voting experience through a modern UI</li>
  <li>Significantly improved security over traditional systems</li>
</ul>

<hr class="my-6 border-gray-700" />

<h2 class="text-xl font-semibold mt-4 mb-2">Conclusion</h2>

<p class="mb-4">
Building this Face Detection E-Voting System allowed me to combine computer vision, backend
engineering, and security design to create a reliable and modern voting platform. With proper
scaling and encryption standards, this system has real potential in institutional, university, and
local administrative elections.
</p>

    `,
  },
];
