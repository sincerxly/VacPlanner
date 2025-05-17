import { useCallback } from "react";

export const useCutTable = () => {
    const timeToAngle = useCallback((time: string) => {
        const [hours, minutes] = time.split(":").map(Number);
        return ((hours % 24) + minutes / 60) * 15;
    }, []);

    const generateClipPath = useCallback(
        (start: string, end: string) => {
            const startAngle = timeToAngle(start);
            const endAngle = timeToAngle(end);
            const steps = 50; // 정밀도
            const center = [50, 50];

            let angles: number[] = [];

            if (startAngle < endAngle) {
                angles = Array.from(
                    { length: steps },
                    (_, i) =>
                        startAngle + ((endAngle - startAngle) * i) / (steps - 1)
                );
            } else {
                // 자정 넘김
                angles = Array.from(
                    { length: steps },
                    (_, i) =>
                        startAngle +
                        ((360 - startAngle + endAngle) * i) / (steps - 1)
                ).map((a) => a % 360);
            }

            const points = angles.map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                return `${x}% ${y}%`;
            });

            return `polygon(${center.join("% ")}%, ${points.join(", ")})`;
        },
        [timeToAngle]
    );

    return { generateClipPath };
};
