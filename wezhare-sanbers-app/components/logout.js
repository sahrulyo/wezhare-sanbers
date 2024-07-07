// components/LogoutButton.js
import { useRouter } from "next/router";
import { useToast, Button } from "@chakra-ui/react";

const LogoutButton = () => {
    const router = useRouter();
    const toast = useToast();

    const handleLogout = async () => {
        try {
            const response = await fetch("https://service.pace-unv.cloud/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (response.ok) {
                // Hapus token dari local storage
                localStorage.removeItem("token");

                toast({
                    title: "Logout successful.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                });

                // Redirect ke halaman login setelah logout
                router.push("/login");
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to logout.");
            }
        } catch (error) {
            console.error("Logout error:", error);
            toast({
                title: "Logout failed.",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <Button onClick={handleLogout} colorScheme="red">
            Logout
        </Button>
    );
};

export default LogoutButton;
