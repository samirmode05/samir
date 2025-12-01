export const blogPosts = [
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
