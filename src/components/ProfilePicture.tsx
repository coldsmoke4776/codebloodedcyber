// src/components/ProfilePicture.tsx
import Image from 'next/image'

export function ProfilePicture() {
  return (
    <div className="mb-8 md:mb-0 md:mr-8">
      <Image
        src="/profilepic2.jpeg" // Replace with the actual path
        alt="Your Name"
        width={300}
        height={300}
        className="rounded-full border-4 border-purple-400 shadow-lg"
      />
    </div>
  )
}

