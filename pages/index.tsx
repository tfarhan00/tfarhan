import BaseLayout from "@/components/Layouts/BaseLayout";
import MediaCard from "@/components/MainPage/MediaCard";
import MyCard from "@/components/MainPage/MyCard";
import StackCard from "@/components/MainPage/StackCard";
import EmailCard from "@/components/MainPage/EmailCard"
import WorksCard from "@/components/MainPage/WorksCard"
import MapCard from "@/components/MainPage/MapCard"
import StoryCard from "@/components/MainPage/StoryCard"
import BlogsCard from "@/components/MainPage/BlogsCard"
import ThemeCard from "@/components/MainPage/ThemeCard"
import ToolsCard from "@/components/MainPage/ToolsCard"
import { motion, useWillChange, AnimatePresence } from 'framer-motion'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"


export default function Home() {

  const willChange = useWillChange()

  return (
    <BaseLayout title="tfarhan - Web Developer"> 
    <AnimatePresence mode='wait'>     
      <motion.div className="w-full flex items-center flex-col bg-cream md:p-4 dark:bg-darker p-4 pb-24 md:pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.9 }}
          style={{ willChange }} 
          className="w-full md:w-[85%] columns-1 lg:columns-2">
            <MyCard />
            <ToolsCard />
            <MediaCard />
            <MapCard />
            <StoryCard />
            <WorksCard />
            <ThemeCard />
            <BlogsCard />
            <StackCard />
            <EmailCard />
        </motion.div>
      </motion.div>
    </AnimatePresence>
    </BaseLayout>
  )
}




