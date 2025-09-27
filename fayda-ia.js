// IA FAYDA Chatbot Logic
class FaydaIA {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.messageHistory = [];
        
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
            <!-- IA FAYDA Chatbot Interface -->
            <div id="fayda-ia-chatbot" class="fayda-chatbot">
                <!-- Chat Toggle Button -->
                <button id="fayda-toggle" class="fayda-toggle">
                    <i class="fas fa-robot"></i>
                    <span class="fayda-toggle-text">IA FAYDA</span>
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
                            <h3>IA FAYDA</h3>
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
                                    <p>As-salamu alaykum ! Je suis IA FAYDA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?</p>
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
                                IA FAYDA tape...
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
        this.bindQuickActions();

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

        // Save state before page unload
        window.addEventListener('beforeunload', () => {
            this.saveChatHistory();
        });

        // Save state periodically
        setInterval(() => {
            this.saveChatHistory();
        }, 5000);
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
            // Send to OpenAI
            const response = await this.sendToOpenAI(message);
            
            // Hide typing indicator
            this.hideTyping();
            
            // Add bot response
            this.addMessage(response, 'bot');
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.hideTyping();
            this.addMessage('Désolé, je rencontre un problème technique. Veuillez réessayer plus tard ou contactez directement la fédération.', 'bot');
        }
    }

    async sendToOpenAI(message) {
        const config = window.FAYDA_CONFIG;
        
        // Debug: Vérifier la configuration
        console.log('Debug - Config:', config);
        console.log('Debug - OpenAI config:', config?.openai);
        console.log('Debug - API Key:', config?.openai?.apiKey ? 'Présente' : 'Manquante');
        
        if (!config || !config.openai || !config.openai.apiKey) {
            console.error('Configuration OpenAI manquante:', {
                configExists: !!config,
                openaiExists: !!config?.openai,
                apiKeyExists: !!config?.openai?.apiKey
            });
            throw new Error('Configuration OpenAI manquante. Vérifiez que fayda-api-key.js est chargé.');
        }

        // Préparer l'historique pour le contexte
        const conversationHistory = this.messageHistory.slice(-10).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.content
        }));

        // Ajouter le message actuel
        conversationHistory.push({
            role: 'user',
            content: message
        });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.openai.apiKey}`
            },
            body: JSON.stringify({
                model: config.openai.model,
                messages: [
                    {
                        role: 'system',
                        content: config.ai.systemPrompt
                    },
                    ...conversationHistory
                ],
                max_tokens: config.openai.maxTokens,
                temperature: config.openai.temperature,
                stop: null
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    }

    addMessage(content, sender, fromHistory = false) {
        const messagesContainer = document.getElementById('fayda-messages');
        const messageId = fromHistory ? `msg_${Date.now()}_${Math.random()}` : 'msg_' + Date.now();
        
        // Handle content format for history vs new messages
        let messageContent, messageTime;
        if (fromHistory && typeof content === 'object') {
            messageContent = content.content;
            messageTime = this.formatHistoryTime(content.timestamp);
        } else {
            messageContent = content;
            messageTime = this.getCurrentTime();
        }
        
        const messageHTML = `
            <div class="fayda-message fayda-message-${sender}" id="${messageId}">
                <div class="fayda-message-avatar">
                    <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
                </div>
                <div class="fayda-message-content">
                    <div class="fayda-message-bubble">
                        <p>${this.formatMessage(messageContent)}</p>
                    </div>
                    <div class="fayda-message-time">
                        <span>${messageTime}</span>
                    </div>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        
        // Remove quick actions after first user message (only for new messages)
        if (!fromHistory) {
            const quickActions = document.querySelector('.fayda-quick-actions');
            if (quickActions && sender === 'user') {
                quickActions.remove();
            }
        }

        // Scroll to bottom
        this.scrollToBottom();

        // Save to history (only for new messages)
        if (!fromHistory) {
            this.messageHistory.push({
                sender: sender,
                content: content,
                timestamp: new Date().toISOString(),
                id: messageId
            });

            // Save to localStorage
            this.saveChatHistory();
        }
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

    formatHistoryTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = (now - date) / (1000 * 60 * 60);
        
        if (diffInHours < 1) {
            return 'À l\'instant';
        } else if (diffInHours < 24) {
            return date.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        } else {
            return date.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit'
            });
        }
    }

    saveChatHistory() {
        try {
            localStorage.setItem('fayda-ia-history', JSON.stringify(this.messageHistory));
            localStorage.setItem('fayda-ia-open', JSON.stringify(this.isOpen));
            localStorage.setItem('fayda-ia-last-page', window.location.pathname);
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
            
            // Restore chat state
            const wasOpen = localStorage.getItem('fayda-ia-open') === 'true';
            const lastPage = localStorage.getItem('fayda-ia-last-page');
            
            // If chat was open and we're on a different page, keep it open
            if (wasOpen && lastPage && lastPage !== window.location.pathname) {
                setTimeout(() => {
                    this.openChat();
                }, 1000);
            }
            
            // Rebuild visual history if there are messages
            if (this.messageHistory.length > 0) {
                this.rebuildChatHistory();
            }
        } catch (error) {
            console.warn('Could not load chat history:', error);
            this.messageHistory = [];
        }
    }

    rebuildChatHistory() {
        const messagesContainer = document.getElementById('fayda-messages');
        if (!messagesContainer) return;
        
        // Clear existing messages except welcome message
        const existingMessages = messagesContainer.querySelectorAll('.fayda-message');
        existingMessages.forEach(msg => {
            if (!msg.querySelector('.fayda-quick-actions')) {
                msg.remove();
            }
        });
        
        // Add history messages
        this.messageHistory.forEach(msg => {
            this.addMessage(msg, msg.sender, true);
        });
        
        // Remove quick actions if there are user messages
        const hasUserMessages = this.messageHistory.some(msg => msg.sender === 'user');
        if (hasUserMessages) {
            const quickActions = document.querySelector('.fayda-quick-actions');
            if (quickActions) {
                quickActions.remove();
            }
        }
        
        // Add a subtle indicator that history was restored
        if (this.messageHistory.length > 0) {
            const historyIndicator = document.createElement('div');
            historyIndicator.className = 'fayda-history-indicator';
            historyIndicator.innerHTML = `
                <div class="fayda-message fayda-message-bot">
                    <div class="fayda-message-avatar">
                        <i class="fas fa-history"></i>
                    </div>
                    <div class="fayda-message-content">
                        <div class="fayda-message-bubble">
                            <p><em>Conversation précédente restaurée</em></p>
                        </div>
                        <div class="fayda-message-time">
                            <span>Historique</span>
                        </div>
                    </div>
                </div>
            `;
            messagesContainer.insertBefore(historyIndicator.firstElementChild, messagesContainer.firstChild);
        }
    }

    // Method to check OpenAI configuration
    checkConfiguration() {
        const config = window.FAYDA_CONFIG;
        return config && config.openai && config.openai.apiKey;
    }

    // Method to clear chat history
    clearHistory() {
        this.messageHistory = [];
        localStorage.removeItem('fayda-ia-history');
        localStorage.removeItem('fayda-ia-open');
        localStorage.removeItem('fayda-ia-last-page');
        
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
                            <p>As-salamu alaykum ! Je suis IA FAYDA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?</p>
                        </div>
                        <div class="fayda-message-time">
                            <span>Maintenant</span>
                        </div>
                    </div>
                </div>
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
            `;
            
            // Rebind quick action buttons
            this.bindQuickActions();
        }
    }

    bindQuickActions() {
        const quickBtns = document.querySelectorAll('.fayda-quick-btn');
        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                const input = document.getElementById('fayda-input');
                if (input) {
                    input.value = question;
                    this.sendMessage();
                }
            });
        });
    }
}

// Initialize IA FAYDA when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que la configuration soit chargée
    function initializeFaydaIA() {
        if (window.FAYDA_CONFIG && window.FAYDA_CONFIG.openai && window.FAYDA_CONFIG.openai.apiKey) {
            window.faydaIA = new FaydaIA();
            console.log('🤖 IA FAYDA initialized successfully!');
            console.log('✅ Configuration OpenAI chargée correctement');
        } else {
            console.warn('⚠️ Configuration OpenAI non trouvée, attente...');
            setTimeout(initializeFaydaIA, 200);
        }
    }
    
    // Commencer l'initialisation
    initializeFaydaIA();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FaydaIA;
}
