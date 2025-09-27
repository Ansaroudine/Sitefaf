// FAYDA IA Chatbot Logic
class FaydaIA {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.messageHistory = [];
        this.webhookUrl = ''; // À configurer avec votre webhook
        
        this.init();
    }

    init() {
        this.createChatbot();
        this.bindEvents();
        this.loadChatHistory();
        
        // Show welcome notification after 3 seconds
        setTimeout(() => {
            this.showNotification();
        }, 3000);
    }

    createChatbot() {
        // Create chatbot container
        const chatbotHTML = `
            <!-- FAYDA IA Chatbot Interface -->
            <div id="fayda-ia-chatbot" class="fayda-chatbot">
                <!-- Chat Toggle Button -->
                <button id="fayda-toggle" class="fayda-toggle">
                    <i class="fas fa-robot"></i>
                    <span class="fayda-toggle-text">FAYDA IA</span>
                    <div class="fayda-notification-dot" id="fayda-notification"></div>
                </button>

                <!-- Chat Window -->
                <div id="fayda-chat-window" class="fayda-chat-window">
                    <!-- Chat Header -->
                    <div class="fayda-chat-header">
                        <div class="fayda-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="fayda-header-info">
                            <h3>FAYDA IA</h3>
                            <p>Assistant virtuel pour la Fayda Tijani</p>
                            <div class="fayda-status">
                                <span class="fayda-status-dot online"></span>
                                <span>En ligne</span>
                            </div>
                        </div>
                        <button id="fayda-minimize" class="fayda-minimize">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <!-- Chat Messages -->
                    <div id="fayda-messages" class="fayda-messages">
                        <!-- Welcome Message -->
                        <div class="fayda-message fayda-message-bot">
                            <div class="fayda-message-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="fayda-message-content">
                                <div class="fayda-message-bubble">
                                    <p>As-salamu alaykum ! Je suis FAYDA IA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?</p>
                                </div>
                                <div class="fayda-message-time">
                                    <span>Maintenant</span>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Actions -->
                        <div class="fayda-quick-actions">
                            <button class="fayda-quick-btn" data-question="Qu'est-ce que la Fayda Tijani ?">
                                <i class="fas fa-question-circle"></i>
                                Qu'est-ce que la Fayda Tijani ?
                            </button>
                            <button class="fayda-quick-btn" data-question="Comment rejoindre Ansaroudine France ?">
                                <i class="fas fa-users"></i>
                                Rejoindre Ansaroudine
                            </button>
                            <button class="fayda-quick-btn" data-question="Où sont les séances de Hadra ?">
                                <i class="fas fa-map-marker-alt"></i>
                                Séances de Hadra
                            </button>
                            <button class="fayda-quick-btn" data-question="Comment contacter la fédération ?">
                                <i class="fas fa-phone"></i>
                                Contact
                            </button>
                        </div>
                    </div>

                    <!-- Chat Input -->
                    <div class="fayda-chat-input">
                        <div class="fayda-input-container">
                            <input type="text" id="fayda-input" placeholder="Posez votre question sur la Fayda Tijani..." maxlength="500">
                            <button id="fayda-send" class="fayda-send-btn">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <div class="fayda-input-footer">
                            <span class="fayda-typing" id="fayda-typing" style="display: none;">
                                <i class="fas fa-circle"></i>
                                <i class="fas fa-circle"></i>
                                <i class="fas fa-circle"></i>
                                FAYDA IA tape...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    bindEvents() {
        const toggle = document.getElementById('fayda-toggle');
        const chatWindow = document.getElementById('fayda-chat-window');
        const minimize = document.getElementById('fayda-minimize');
        const input = document.getElementById('fayda-input');
        const sendBtn = document.getElementById('fayda-send');
        const quickBtns = document.querySelectorAll('.fayda-quick-btn');

        // Toggle chat
        toggle.addEventListener('click', () => {
            this.toggleChat();
        });

        // Minimize chat
        minimize.addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Quick action buttons
        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                input.value = question;
                this.sendMessage();
            });
        });

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#fayda-ia-chatbot') && this.isOpen) {
                this.closeChat();
            }
        });

        // Hide notification when chat is opened
        toggle.addEventListener('click', () => {
            this.hideNotification();
        });
    }

    toggleChat() {
        const chatWindow = document.getElementById('fayda-chat-window');
        const toggle = document.getElementById('fayda-toggle');
        
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const chatWindow = document.getElementById('fayda-chat-window');
        chatWindow.classList.add('active');
        this.isOpen = true;
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('fayda-input').focus();
        }, 300);
    }

    closeChat() {
        const chatWindow = document.getElementById('fayda-chat-window');
        chatWindow.classList.remove('active');
        this.isOpen = false;
    }

    showNotification() {
        const notification = document.getElementById('fayda-notification');
        if (notification && !this.isOpen) {
            notification.classList.add('show');
        }
    }

    hideNotification() {
        const notification = document.getElementById('fayda-notification');
        if (notification) {
            notification.classList.remove('show');
        }
    }

    async sendMessage() {
        const input = document.getElementById('fayda-input');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;

        // Clear input
        input.value = '';

        // Add user message
        this.addMessage(message, 'user');

        // Show typing indicator
        this.showTyping();

        try {
            // Send to webhook
            const response = await this.sendToWebhook(message);
            
            // Hide typing indicator
            this.hideTyping();
            
            // Add bot response
            this.addMessage(response, 'bot');
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.hideTyping();
            this.addMessage('Désolé, je rencontre un problème technique. Veuillez réessayer plus tard.', 'bot');
        }
    }

    async sendToWebhook(message) {
        // Configuration du webhook
        const webhookUrl = this.webhookUrl || 'https://votre-webhook-url.com/api/fayda-ia';
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                context: {
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                },
                history: this.messageHistory.slice(-5) // Last 5 messages for context
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response || data.message || 'Je n\'ai pas pu traiter votre demande.';
    }

    addMessage(content, sender) {
        const messagesContainer = document.getElementById('fayda-messages');
        const messageId = 'msg_' + Date.now();
        
        const messageHTML = `
            <div class="fayda-message fayda-message-${sender}" id="${messageId}">
                <div class="fayda-message-avatar">
                    <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
                </div>
                <div class="fayda-message-content">
                    <div class="fayda-message-bubble">
                        <p>${this.formatMessage(content)}</p>
                    </div>
                    <div class="fayda-message-time">
                        <span>${this.getCurrentTime()}</span>
                    </div>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        
        // Remove quick actions after first user message
        const quickActions = document.querySelector('.fayda-quick-actions');
        if (quickActions && sender === 'user') {
            quickActions.remove();
        }

        // Scroll to bottom
        this.scrollToBottom();

        // Save to history
        this.messageHistory.push({
            sender: sender,
            content: content,
            timestamp: new Date().toISOString(),
            id: messageId
        });

        // Save to localStorage
        this.saveChatHistory();
    }

    formatMessage(content) {
        // Basic HTML formatting for links and line breaks
        return content
            .replace(/\n/g, '<br>')
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: var(--primary-green); text-decoration: underline;">$1</a>');
    }

    showTyping() {
        this.isTyping = true;
        const typingIndicator = document.getElementById('fayda-typing');
        typingIndicator.style.display = 'flex';
        
        // Disable send button
        const sendBtn = document.getElementById('fayda-send');
        sendBtn.disabled = true;
        
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('fayda-typing');
        typingIndicator.style.display = 'none';
        
        // Enable send button
        const sendBtn = document.getElementById('fayda-send');
        sendBtn.disabled = false;
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('fayda-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    saveChatHistory() {
        try {
            localStorage.setItem('fayda-ia-history', JSON.stringify(this.messageHistory));
        } catch (error) {
            console.warn('Could not save chat history:', error);
        }
    }

    loadChatHistory() {
        try {
            const saved = localStorage.getItem('fayda-ia-history');
            if (saved) {
                this.messageHistory = JSON.parse(saved);
                // Keep only last 20 messages
                if (this.messageHistory.length > 20) {
                    this.messageHistory = this.messageHistory.slice(-20);
                }
            }
        } catch (error) {
            console.warn('Could not load chat history:', error);
            this.messageHistory = [];
        }
    }

    // Method to configure webhook URL
    setWebhookUrl(url) {
        this.webhookUrl = url;
    }

    // Method to clear chat history
    clearHistory() {
        this.messageHistory = [];
        localStorage.removeItem('fayda-ia-history');
        
        // Reload the chat interface
        const messagesContainer = document.getElementById('fayda-messages');
        if (messagesContainer) {
            messagesContainer.innerHTML = `
                <div class="fayda-message fayda-message-bot">
                    <div class="fayda-message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="fayda-message-content">
                        <div class="fayda-message-bubble">
                            <p>As-salamu alaykum ! Je suis FAYDA IA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?</p>
                        </div>
                        <div class="fayda-message-time">
                            <span>Maintenant</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

// Initialize FAYDA IA when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.faydaIA = new FaydaIA();
    
    // Configuration example (à remplacer par votre URL de webhook)
    // window.faydaIA.setWebhookUrl('https://votre-webhook-url.com/api/fayda-ia');
    
    console.log('🤖 FAYDA IA initialized successfully!');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FaydaIA;
}
