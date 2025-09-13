import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Testimonials Left Side */}
        <div className="flex flex-col gap-6">
          <Card className="bg-neutral-900 text-gray-200 rounded-2xl p-6 shadow-lg">
            <CardContent>
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="mb-4">
                Adrian brought creativity and technical expertise to the team,
                significantly improving our frontend performance. His work has
                been invaluable in delivering faster experiences.
              </p>
              <div className="flex items-center gap-2 text-purple-400">
                <img src="/hostinger.svg" alt="Hostinger" className="h-5" />
                <span className="font-semibold">Hostinger</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 text-gray-200 rounded-2xl p-6 shadow-lg">
            <CardContent>
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="mb-4">
                Adrian's contributions to Docker's web applications have been
                outstanding. He approaches challenges with a problem-solving
                mindset.
              </p>
              <div className="flex items-center gap-2 text-pink-400">
                <img src="/appwrite.svg" alt="Appwrite" className="h-5" />
                <span className="font-semibold">Appwrite</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Right Side */}
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold">Frontend Developer</h2>
            <p className="text-gray-400">January 2023 – Present</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Full Stack Developer</h2>
            <p className="text-gray-400">June 2020 – December 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
