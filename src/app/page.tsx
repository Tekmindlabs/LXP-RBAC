import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">LXP Platform</span>
            </div>
            <Link
              href="/auth/signin"  // Direct link to signin page
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Learning Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover a new way of learning with our comprehensive Learning Experience Platform. 
            Personalized paths, expert content, and interactive learning all in one place.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <FeatureCard
            title="Personalized Learning"
            description="Custom learning paths tailored to your goals and preferences"
            icon="📚"
          />
          <FeatureCard
            title="Expert Content"
            description="Access high-quality content created by industry experts"
            icon="👨‍🏫"
          />
          <FeatureCard
            title="Track Progress"
            description="Monitor your learning journey with detailed analytics"
            icon="📊"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>© 2024 LXP Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}