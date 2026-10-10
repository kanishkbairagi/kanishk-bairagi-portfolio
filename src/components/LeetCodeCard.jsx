import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { 
    ArrowUpRight, 
    Zap, 
    Flame, 
    Code2, 
    TrendingUp, 
    CheckCircle2,
    Award
} from 'lucide-react';

const LeetCodeCard = () => {
    // Initial stats cached from user profile
    const [stats, setStats] = useState({
        totalSolved: 230,
        easySolved: 68,
        mediumSolved: 140,
        hardSolved: 22,
        totalSubmissions: 784,
        ranking: 'Top Tier'
    });

    // Try fetching latest live stats in background
    useEffect(() => {
        let isMounted = true;
        const fetchLeetCode = async () => {
            try {
                const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/kanishk_bairagi');
                if (!res.ok) return;
                const data = await res.json();
                if (isMounted && data.totalSolved) {
                    setStats(prev => ({
                        ...prev,
                        totalSolved: data.totalSolved,
                        easySolved: data.easySolved ?? prev.easySolved,
                        mediumSolved: data.mediumSolved ?? prev.mediumSolved,
                        hardSolved: data.hardSolved ?? prev.hardSolved,
                        totalSubmissions: data.totalSubmissions?.[0]?.submissions ?? prev.totalSubmissions,
                    }));
                }
            } catch {
                // Silently fallback to cached stats
            }
        };

        fetchLeetCode();
        return () => { isMounted = false; };
    }, []);

    const easyPct = Math.round((stats.easySolved / stats.totalSolved) * 100) || 30;
    const mediumPct = Math.round((stats.mediumSolved / stats.totalSolved) * 100) || 61;
    const hardPct = 100 - easyPct - mediumPct;

    const coreTopics = [
        'Dynamic Programming',
        'Graphs & Trees',
        'Binary Search',
        'Sliding Window',
        'Two Pointers',
        'Stacks & Queues',
        'Recursion'
    ];

 
};

export default LeetCodeCard;
