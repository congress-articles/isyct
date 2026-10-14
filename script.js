(() => {
  'use strict';

  const copy = {
    pt: {
      'accessibility.skip': 'Pular para o conteúdo',
      'accessibility.menu': 'Abrir menu',
      'accessibility.navigation': 'Navegação principal',
      'accessibility.language': 'Selecionar idioma',
      'nav.solution': 'Solução',
      'nav.architecture': 'Arquitetura',
      'nav.envelope': 'Envelope V4',
      'nav.keys': 'Chaves',
      'nav.performance': 'Desempenho',
      'nav.download': 'Baixar para Linux',
      'hero.eyebrow': 'Protótipo acadêmico • Linux x86-64',
      'hero.title': 'Seu e-mail continua o mesmo. O conteúdo deixa de pertencer ao servidor.',
      'hero.lede': 'O ISYCT-Mail acrescenta criptografia ponta a ponta pós-quântica ao fluxo tradicional de e-mail, preservando SMTP, IMAP e provedores existentes.',
      'hero.download': 'Baixar executável Linux',
      'hero.explore': 'Explorar a arquitetura',
      'hero.demo.secure': 'protegido',
      'hero.demo.message': 'Mensagem original',
      'hero.demo.private': 'Assunto, corpo e anexos',
      'hero.demo.encrypt': 'Cifra a carga uma vez',
      'hero.demo.slots': 'Protege a chave por destinatário',
      'hero.demo.sign': 'Autentica o envelope completo',
      'hero.demo.ready': 'Pronto para SMTP / IMAP',
      'hero.demo.tests': 'por cenário',
      'hero.demo.median': 'mediana até 100 KB',
      'capabilities.server.title': 'Servidor cego',
      'capabilities.server.text': 'O provedor transporta, mas não abre.',
      'capabilities.pq.title': 'Pós-quântico',
      'capabilities.pq.text': 'ML-KEM e ML-DSA padronizados.',
      'capabilities.compat.title': 'Compatível',
      'capabilities.compat.text': 'SMTP, IMAP e MIME continuam em uso.',
      'capabilities.local.title': 'Controle local',
      'capabilities.local.text': 'Chaves e mensagens no SQLCipher.',
      'solution.kicker': 'O problema',
      'solution.title': 'TLS protege o caminho. O ISYCT-Mail protege a mensagem.',
      'solution.intro': 'No e-mail convencional, a conexão pode ser cifrada e ainda assim o conteúdo chegar em texto claro ao provedor. A proposta desloca a fronteira de confiança para o cliente do usuário.',
      'solution.before.label': 'Fluxo convencional',
      'solution.before.title': 'O servidor participa do conteúdo',
      'solution.before.item1': 'Assunto e corpo podem ser processados no servidor',
      'solution.before.item2': 'Anexos ficam disponíveis à infraestrutura do provedor',
      'solution.before.item3': 'TLS protege conexões, não os pontos finais',
      'solution.after.label': 'Fluxo ISYCT-Mail',
      'solution.after.title': 'O servidor participa apenas do transporte',
      'solution.after.item1': 'Conteúdo cifrado antes do envio por SMTP',
      'solution.after.item2': 'Abertura somente no cliente autorizado',
      'solution.after.item3': 'Assinatura e integridade verificadas antes da exibição',
      'architecture.kicker': 'Arquitetura',
      'architecture.title': 'Segurança no cliente, infraestrutura intacta.',
      'architecture.intro': 'As operações sensíveis ficam no backend Rust. O provedor mantém sua função original: autenticar a conta, transportar, armazenar e sincronizar o envelope cifrado.',
      'architecture.sender.tag': 'Cliente do remetente',
      'architecture.sender.title': 'Compor e proteger',
      'architecture.sender.text': 'Tauri + Rust + SQLCipher',
      'architecture.server.tag': 'Provedor existente',
      'architecture.server.title': 'Servidor cego',
      'architecture.server.text': 'Armazena apenas o arquivo .isyct',
      'architecture.server.badge': 'Sem texto claro',
      'architecture.receiver.tag': 'Cliente do destinatário',
      'architecture.receiver.title': 'Validar e abrir',
      'architecture.receiver.text': 'Assinatura → slot → carga',
      'architecture.receiver.trust': 'Confiança',
      'architecture.trust': 'Protocolo KEY + confirmação fora de banda',
      'architecture.layers.interface.title': 'Interface isolada',
      'architecture.layers.interface.text': 'A WebView solicita operações por comandos Tauri, mas não recebe chaves privadas.',
      'architecture.layers.backend.title': 'Núcleo Rust',
      'architecture.layers.backend.text': 'Identidade, confiança, criptografia e validação são aplicadas fora da camada visual.',
      'architecture.layers.transport.title': 'Transporte padrão',
      'architecture.layers.transport.text': 'SMTP, IMAP e MIME carregam o envelope sem precisar conhecer seu conteúdo.',
      'architecture.layers.storage.title': 'Persistência cifrada',
      'architecture.layers.storage.text': 'SQLCipher protege mensagens, identidades, vínculos e chaves no armazenamento local.',
      'envelope.kicker': 'Envelope V4',
      'envelope.title': 'Uma carga cifrada. Um slot seguro para cada destinatário.',
      'envelope.intro': 'O conteúdo é serializado e cifrado uma única vez. Cada destinatário recebe somente uma forma independente de recuperar a chave de conteúdo, reduzindo duplicação e preservando o controle de acesso.',
      'envelope.step1.title': 'Carga canônica',
      'envelope.step1.text': 'Assunto, corpos, endereços e anexos formam MailPayloadV1.',
      'envelope.step2.title': 'Cifragem autenticada',
      'envelope.step2.text': 'Uma CEK aleatória protege a carga com AES-256-GCM.',
      'envelope.step3.title': 'Slots ML-KEM',
      'envelope.step3.text': 'A CEK é protegida individualmente para destinatários e remetente.',
      'envelope.step4.title': 'Transcript assinado',
      'envelope.step4.text': 'Hash ML-DSA autentica cabeçalho, carga, slots e chave pública.',
      'envelope.diagram.header': 'Cabeçalho protegido',
      'envelope.diagram.payload': 'Carga cifrada',
      'envelope.diagram.slots': 'Slots de destinatários',
      'envelope.diagram.signature': 'Assinatura do transcript',
      'envelope.diagram.versioned': 'Contêiner binário versionado',
      'keys.kicker': 'Gerenciamento de chaves',
      'keys.title': 'Uma chave válida não é automaticamente uma identidade confiável.',
      'keys.intro': 'O ISYCT-Mail separa consistência criptográfica, ciclo de vida e confiança. Um bundle importado entra em quarentena até que uma evidência independente vincule endereço, DID e chaves.',
      'keys.states.candidate': 'Material consistente, ainda bloqueado para envio.',
      'keys.states.oob': 'Número de segurança confirmado fora do e-mail.',
      'keys.states.high': 'Evidência GOV.BR validada e vinculada.',
      'keys.timeline.create.tag': 'Criar',
      'keys.timeline.create.title': 'Identidade did:isyct',
      'keys.timeline.create.text': 'Pares ML-KEM e ML-DSA gerados localmente; o DID deriva das chaves públicas.',
      'keys.timeline.exchange.tag': 'Trocar',
      'keys.timeline.exchange.title': 'Bundle público verificável',
      'keys.timeline.exchange.text': 'Documento canônico e fingerprint permitem detectar inconsistências sem expor segredos.',
      'keys.timeline.trust.tag': 'Verificar',
      'keys.timeline.trust.title': 'Protocolo KEY',
      'keys.timeline.trust.text': 'Mensagens encadeadas e comparação fora de banda mitigam substituição ativa de chaves.',
      'keys.timeline.lifecycle.tag': 'Evoluir',
      'keys.timeline.lifecycle.title': 'Rotação com histórico',
      'keys.timeline.lifecycle.text': 'Novos pares criam outro DID; chaves antigas permanecem apenas para mensagens históricas.',
      'performance.kicker': 'Desempenho medido',
      'performance.title': 'Criptografia em milissegundos. Rede em segundos.',
      'performance.intro': 'Cada cenário foi executado 100 vezes em modo release, após cinco ciclos de aquecimento. Selecione um ensaio para explorar os resultados.',
      'performance.tabsLabel': 'Ensaios de desempenho',
      'performance.tabs.envelope': 'Envelope',
      'performance.tabs.keys': 'Geração de chaves',
      'performance.tabs.attachments': 'Anexos',
      'performance.chart.metric': 'Métrica principal',
      'performance.highlight.label': 'Leitura principal',
      'performance.highlight.context': 'No mesmo ambiente',
      'performance.method.title': 'Por que 100 repetições?',
      'performance.method.text': 'O planejamento adotou intervalo bilateral de 95%, semiamplitude de até 10% da média e coeficiente de variação conservador de 50%, resultando em mínimo aproximado de 97 observações.',
      'product.kicker': 'Protótipo funcional',
      'product.title': 'A criptografia faz parte do fluxo, não de uma ferramenta separada.',
      'product.intro': 'Conta, caixa postal, composição, identidades e estabelecimento de confiança convivem na mesma aplicação desktop.',
      'product.previous': 'Imagem anterior',
      'product.next': 'Próxima imagem',
      'product.select': 'Selecionar captura',
      'boundaries.kicker': 'Limites claros',
      'boundaries.title': 'O que fica protegido — e o que continua visível.',
      'boundaries.protected.title': 'Dentro do envelope',
      'boundaries.protected.item1': 'Assunto real e corpos textual/HTML',
      'boundaries.protected.item2': 'Nomes, tipos e conteúdo dos anexos',
      'boundaries.protected.item3': 'Endereços internos e resposta',
      'boundaries.protected.item4': 'Integridade e autenticidade do conteúdo',
      'boundaries.visible.title': 'No transporte',
      'boundaries.visible.item1': 'Endereços SMTP externos',
      'boundaries.visible.item2': 'Data, volume e padrão de comunicação',
      'boundaries.visible.item3': 'DIDs, algoritmos e número de slots',
      'boundaries.visible.item4': 'Tamanho aproximado da mensagem',
      'boundaries.device.title': 'Premissa necessária',
      'boundaries.device.item1': 'Dispositivo e sistema operacional confiáveis',
      'boundaries.device.item2': 'Senha local forte e chaves protegidas',
      'boundaries.device.item3': 'Canal independente realmente verificado',
      'boundaries.device.item4': 'O protótipo ainda requer auditoria independente',
      'download.kicker': 'Experimente o protótipo',
      'download.title': 'Baixe o ISYCT-Mail para Linux.',
      'download.intro': 'Executável experimental de 64 bits para avaliação acadêmica. O arquivo é fornecido sem instalador e pode exigir bibliotecas compatíveis no sistema.',
      'download.button': 'Baixar isyct_mail',
      'download.manual': 'Baixar manual do usuário',
      'download.manualMeta': 'PDF · Português',
      'download.warning': 'Protótipo de pesquisa: não substitui uma solução auditada para uso crítico.',
      'download.binary.title': 'Binário Linux',
      'download.binary.available': 'Disponível',
      'download.binary.file': 'Arquivo',
      'download.binary.size': 'Tamanho',
      'download.binary.platform': 'Plataforma',
      'download.run': 'Executar no terminal',
      'download.copyCommand': 'Copiar comandos',
      'download.checksum': 'SHA-256 do arquivo',
      'download.copyChecksum': 'Copiar SHA-256',
      'faq.kicker': 'Perguntas frequentes',
      'faq.title': 'Antes de testar.',
      'faq.item1.question': 'Preciso trocar de provedor de e-mail?',
      'faq.item1.answer': 'Não. A proposta utiliza SMTP, IMAP e MIME convencionais. O protótipo foi avaliado com Gmail, mas a leitura protegida exige outro cliente compatível com o Envelope V4.',
      'faq.item2.question': 'Um destinatário sem ISYCT-Mail consegue ler a mensagem?',
      'faq.item2.answer': 'Ele recebe e pode armazenar o arquivo .isyct, mas precisa de um cliente que implemente o formato e da chave privada correspondente a um slot autorizado para abrir o conteúdo.',
      'faq.item3.question': 'O protótipo oferece anonimato ou sigilo futuro?',
      'faq.item3.answer': 'Não. Metadados de transporte continuam visíveis e o formato não oferece sigilo futuro. O objetivo é proteger o conteúdo contra o acesso pelo servidor dentro do modelo de ameaça documentado.',
      'footer.description': 'Cliente de e-mail experimental com criptografia pós-quântica no lado do usuário.',
      'footer.explore': 'Explorar',
      'footer.project': 'Projeto',
      'footer.prototype': 'Protótipo',
      'footer.security': 'Segurança e limites',
      'footer.manual': 'Manual do usuário',
      'footer.academic': 'Projeto acadêmico · Universidade Federal de São Paulo',
      'toast.copied': 'Copiado para a área de transferência.',
      'toast.copyFailed': 'Não foi possível copiar automaticamente.',
      'toast.download': 'Download iniciado.',
      'toast.manual': 'Download do manual iniciado.'
    },
    en: {
      'accessibility.skip': 'Skip to content',
      'accessibility.menu': 'Open menu',
      'accessibility.navigation': 'Main navigation',
      'accessibility.language': 'Select language',
      'nav.solution': 'Solution',
      'nav.architecture': 'Architecture',
      'nav.envelope': 'Envelope V4',
      'nav.keys': 'Keys',
      'nav.performance': 'Performance',
      'nav.download': 'Download for Linux',
      'hero.eyebrow': 'Academic prototype • Linux x86-64',
      'hero.title': 'Your email stays the same. Its content no longer belongs to the server.',
      'hero.lede': 'ISYCT-Mail adds post-quantum end-to-end encryption to the traditional email flow while preserving SMTP, IMAP, and existing providers.',
      'hero.download': 'Download Linux executable',
      'hero.explore': 'Explore the architecture',
      'hero.demo.secure': 'protected',
      'hero.demo.message': 'Original message',
      'hero.demo.private': 'Subject, body, and attachments',
      'hero.demo.encrypt': 'Encrypt the payload once',
      'hero.demo.slots': 'Protect the key for each recipient',
      'hero.demo.sign': 'Authenticate the complete envelope',
      'hero.demo.ready': 'Ready for SMTP / IMAP',
      'hero.demo.tests': 'per scenario',
      'hero.demo.median': 'median up to 100 KB',
      'capabilities.server.title': 'Blind server',
      'capabilities.server.text': 'The provider transports but cannot open.',
      'capabilities.pq.title': 'Post-quantum',
      'capabilities.pq.text': 'Standardized ML-KEM and ML-DSA.',
      'capabilities.compat.title': 'Compatible',
      'capabilities.compat.text': 'SMTP, IMAP, and MIME remain in use.',
      'capabilities.local.title': 'Local control',
      'capabilities.local.text': 'Keys and messages in SQLCipher.',
      'solution.kicker': 'The problem',
      'solution.title': 'TLS protects the path. ISYCT-Mail protects the message.',
      'solution.intro': 'In conventional email, the connection may be encrypted while the content still reaches the provider in plaintext. This approach moves the trust boundary to the user client.',
      'solution.before.label': 'Conventional flow',
      'solution.before.title': 'The server participates in the content',
      'solution.before.item1': 'Subject and body may be processed on the server',
      'solution.before.item2': 'Attachments remain available to provider infrastructure',
      'solution.before.item3': 'TLS protects connections, not endpoints',
      'solution.after.label': 'ISYCT-Mail flow',
      'solution.after.title': 'The server participates only in transport',
      'solution.after.item1': 'Content encrypted before SMTP delivery',
      'solution.after.item2': 'Opened only on an authorized client',
      'solution.after.item3': 'Signature and integrity verified before display',
      'architecture.kicker': 'Architecture',
      'architecture.title': 'Client-side security, unchanged infrastructure.',
      'architecture.intro': 'Sensitive operations remain in the Rust backend. The provider keeps its original role: authenticate the account and transport, store, and synchronize the encrypted envelope.',
      'architecture.sender.tag': 'Sender client',
      'architecture.sender.title': 'Compose and protect',
      'architecture.sender.text': 'Tauri + Rust + SQLCipher',
      'architecture.server.tag': 'Existing provider',
      'architecture.server.title': 'Blind server',
      'architecture.server.text': 'Stores only the .isyct file',
      'architecture.server.badge': 'No plaintext',
      'architecture.receiver.tag': 'Recipient client',
      'architecture.receiver.title': 'Validate and open',
      'architecture.receiver.text': 'Signature → slot → payload',
      'architecture.receiver.trust': 'Trust',
      'architecture.trust': 'KEY protocol + out-of-band confirmation',
      'architecture.layers.interface.title': 'Isolated interface',
      'architecture.layers.interface.text': 'The WebView requests operations through Tauri commands but never receives private keys.',
      'architecture.layers.backend.title': 'Rust core',
      'architecture.layers.backend.text': 'Identity, trust, cryptography, and validation are enforced outside the visual layer.',
      'architecture.layers.transport.title': 'Standard transport',
      'architecture.layers.transport.text': 'SMTP, IMAP, and MIME carry the envelope without needing to understand its content.',
      'architecture.layers.storage.title': 'Encrypted persistence',
      'architecture.layers.storage.text': 'SQLCipher protects messages, identities, links, and keys in local storage.',
      'envelope.kicker': 'Envelope V4',
      'envelope.title': 'One encrypted payload. One secure slot for each recipient.',
      'envelope.intro': 'The content is serialized and encrypted once. Each recipient gets an independent way to recover the content key, reducing duplication while preserving access control.',
      'envelope.step1.title': 'Canonical payload',
      'envelope.step1.text': 'Subject, bodies, addresses, and attachments form MailPayloadV1.',
      'envelope.step2.title': 'Authenticated encryption',
      'envelope.step2.text': 'A random CEK protects the payload with AES-256-GCM.',
      'envelope.step3.title': 'ML-KEM slots',
      'envelope.step3.text': 'The CEK is individually protected for recipients and sender.',
      'envelope.step4.title': 'Signed transcript',
      'envelope.step4.text': 'Hash ML-DSA authenticates header, payload, slots, and public key.',
      'envelope.diagram.header': 'Protected header',
      'envelope.diagram.payload': 'Encrypted payload',
      'envelope.diagram.slots': 'Recipient slots',
      'envelope.diagram.signature': 'Transcript signature',
      'envelope.diagram.versioned': 'Versioned binary container',
      'keys.kicker': 'Key management',
      'keys.title': 'A valid key is not automatically a trusted identity.',
      'keys.intro': 'ISYCT-Mail separates cryptographic consistency, lifecycle, and trust. An imported bundle is quarantined until independent evidence binds the address, DID, and keys.',
      'keys.states.candidate': 'Consistent material, still blocked for sending.',
      'keys.states.oob': 'Safety number confirmed outside email.',
      'keys.states.high': 'Validated and linked GOV.BR evidence.',
      'keys.timeline.create.tag': 'Create',
      'keys.timeline.create.title': 'did:isyct identity',
      'keys.timeline.create.text': 'ML-KEM and ML-DSA pairs are generated locally; the DID derives from the public keys.',
      'keys.timeline.exchange.tag': 'Exchange',
      'keys.timeline.exchange.title': 'Verifiable public bundle',
      'keys.timeline.exchange.text': 'A canonical document and fingerprint reveal inconsistencies without exposing secrets.',
      'keys.timeline.trust.tag': 'Verify',
      'keys.timeline.trust.title': 'KEY protocol',
      'keys.timeline.trust.text': 'Chained messages and out-of-band comparison mitigate active key substitution.',
      'keys.timeline.lifecycle.tag': 'Evolve',
      'keys.timeline.lifecycle.title': 'Rotation with history',
      'keys.timeline.lifecycle.text': 'New key pairs create another DID; old keys remain only for historical messages.',
      'performance.kicker': 'Measured performance',
      'performance.title': 'Cryptography in milliseconds. Network in seconds.',
      'performance.intro': 'Each scenario ran 100 times in release mode after five warm-up cycles. Select a benchmark to explore the results.',
      'performance.tabsLabel': 'Performance benchmarks',
      'performance.tabs.envelope': 'Envelope',
      'performance.tabs.keys': 'Key generation',
      'performance.tabs.attachments': 'Attachments',
      'performance.chart.metric': 'Primary metric',
      'performance.highlight.label': 'Key takeaway',
      'performance.highlight.context': 'In the same environment',
      'performance.method.title': 'Why 100 repetitions?',
      'performance.method.text': 'The design used a two-sided 95% confidence interval, a half-width of up to 10% of the mean, and a conservative 50% coefficient of variation, yielding an approximate minimum of 97 observations.',
      'product.kicker': 'Working prototype',
      'product.title': 'Encryption is part of the workflow, not a separate tool.',
      'product.intro': 'Account, mailbox, composition, identities, and trust establishment coexist in the same desktop application.',
      'product.previous': 'Previous image',
      'product.next': 'Next image',
      'product.select': 'Select screenshot',
      'boundaries.kicker': 'Clear boundaries',
      'boundaries.title': 'What stays protected — and what remains visible.',
      'boundaries.protected.title': 'Inside the envelope',
      'boundaries.protected.item1': 'Real subject and text/HTML bodies',
      'boundaries.protected.item2': 'Attachment names, types, and content',
      'boundaries.protected.item3': 'Internal addresses and reply target',
      'boundaries.protected.item4': 'Content integrity and authenticity',
      'boundaries.visible.title': 'During transport',
      'boundaries.visible.item1': 'External SMTP addresses',
      'boundaries.visible.item2': 'Date, volume, and communication pattern',
      'boundaries.visible.item3': 'DIDs, algorithms, and slot count',
      'boundaries.visible.item4': 'Approximate message size',
      'boundaries.device.title': 'Required assumption',
      'boundaries.device.item1': 'Trusted device and operating system',
      'boundaries.device.item2': 'Strong local password and protected keys',
      'boundaries.device.item3': 'A genuinely verified independent channel',
      'boundaries.device.item4': 'The prototype still requires an independent audit',
      'download.kicker': 'Try the prototype',
      'download.title': 'Download ISYCT-Mail for Linux.',
      'download.intro': 'Experimental 64-bit executable for academic evaluation. The file is provided without an installer and may require compatible system libraries.',
      'download.button': 'Download isyct_mail',
      'download.manual': 'Download user manual',
      'download.manualMeta': 'PDF · Portuguese',
      'download.warning': 'Research prototype: it does not replace an audited solution for critical use.',
      'download.binary.title': 'Linux binary',
      'download.binary.available': 'Available',
      'download.binary.file': 'File',
      'download.binary.size': 'Size',
      'download.binary.platform': 'Platform',
      'download.run': 'Run in the terminal',
      'download.copyCommand': 'Copy commands',
      'download.checksum': 'File SHA-256',
      'download.copyChecksum': 'Copy SHA-256',
      'faq.kicker': 'Frequently asked questions',
      'faq.title': 'Before you test.',
      'faq.item1.question': 'Do I need to change email providers?',
      'faq.item1.answer': 'No. The approach uses conventional SMTP, IMAP, and MIME. The prototype was evaluated with Gmail, but protected reading requires another client compatible with Envelope V4.',
      'faq.item2.question': 'Can a recipient without ISYCT-Mail read the message?',
      'faq.item2.answer': 'They can receive and store the .isyct file, but need a client that implements the format and the private key matching an authorized slot to open its content.',
      'faq.item3.question': 'Does the prototype offer anonymity or forward secrecy?',
      'faq.item3.answer': 'No. Transport metadata remains visible and the format does not provide forward secrecy. Its goal is to protect content from server access within the documented threat model.',
      'footer.description': 'Experimental email client with user-side post-quantum encryption.',
      'footer.explore': 'Explore',
      'footer.project': 'Project',
      'footer.prototype': 'Prototype',
      'footer.security': 'Security and boundaries',
      'footer.manual': 'User manual',
      'footer.academic': 'Academic project · Federal University of São Paulo',
      'toast.copied': 'Copied to the clipboard.',
      'toast.copyFailed': 'Could not copy automatically.',
      'toast.download': 'Download started.',
      'toast.manual': 'Manual download started.'
    }
  };

  const performanceData = {
    envelope: {
      labels: ['1 KB', '10 KB', '100 KB'],
      series: {
        pt: [
          { name: 'Selagem', values: [4.096, 4.682, 7.312] },
          { name: 'Abertura', values: [1.357, 1.682, 7.616] }
        ],
        en: [
          { name: 'Sealing', values: [4.096, 4.682, 7.312] },
          { name: 'Opening', values: [1.357, 1.682, 7.616] }
        ]
      },
      unit: 'ms',
      pt: { title: 'Mediana de selagem e abertura', highlight: '< 8 ms', text: 'Medianas de selagem e abertura para corpos de até 100 KB.', secondary: 'SMTP: 4,036 s' },
      en: { title: 'Median sealing and opening time', highlight: '< 8 ms', text: 'Median sealing and opening times for bodies up to 100 KB.', secondary: 'SMTP: 4.036 s' }
    },
    keys: {
      labels: ['KEM-512', 'KEM-768', 'KEM-1024', 'DSA-44', 'DSA-65', 'DSA-87'],
      series: {
        pt: [
          { name: 'Média', values: [0.092, 0.154, 0.247, 0.652, 1.060, 1.640] },
          { name: 'P95', values: [0.132, 0.218, 0.345, 1.031, 1.714, 2.808] }
        ],
        en: [
          { name: 'Mean', values: [0.092, 0.154, 0.247, 0.652, 1.060, 1.640] },
          { name: 'P95', values: [0.132, 0.218, 0.345, 1.031, 1.714, 2.808] }
        ]
      },
      unit: 'ms',
      pt: { title: 'Geração dos pares de chaves', highlight: '< 2,9 ms', text: 'P95 inferior a 2,9 ms nas seis variantes avaliadas.', secondary: '6 variantes testadas' },
      en: { title: 'Key-pair generation', highlight: '< 2.9 ms', text: 'P95 below 2.9 ms across all six evaluated variants.', secondary: '6 tested variants' }
    },
    attachments: {
      labels: ['1 MB', '5 MB', '10 MB', '15 MB'],
      series: {
        pt: [
          { name: 'Selagem', values: [0.405, 2.570, 6.137, 10.020] },
          { name: 'Abertura', values: [0.056, 0.279, 0.602, 0.854] }
        ],
        en: [
          { name: 'Sealing', values: [0.405, 2.570, 6.137, 10.020] },
          { name: 'Opening', values: [0.056, 0.279, 0.602, 0.854] }
        ]
      },
      unit: 's',
      pt: { title: 'Mediana por tamanho de anexo', highlight: '10,020 s', text: 'Selagem de um anexo de 15 MB; a abertura permaneceu abaixo de 1 s.', secondary: 'Sobrecarga: 0,063%' },
      en: { title: 'Median time by attachment size', highlight: '10.020 s', text: 'Sealing a 15 MB attachment; opening remained below 1 second.', secondary: 'Overhead: 0.063%' }
    }
  };

  const galleryItems = [
    {
      src: 'assets/screenshot-inbox.png',
      pt: ['Caixa postal e leitura', 'Mensagens tradicionais e protegidas na mesma experiência de uso.', 'Caixa de entrada do ISYCT-Mail'],
      en: ['Mailbox and reading', 'Traditional and protected messages in the same user experience.', 'ISYCT-Mail inbox']
    },
    {
      src: 'assets/screenshot-key-exchange.png',
      pt: ['Troca de chaves', 'Acompanhamento das sessões do protocolo KEY e de seus estados.', 'Sessões de troca de chaves do ISYCT-Mail'],
      en: ['Key exchange', 'Tracking KEY protocol sessions and their states.', 'ISYCT-Mail key exchange sessions']
    },
    {
      src: 'assets/screenshot-key-management.png',
      pt: ['Gerenciamento criptográfico', 'Identidades locais e parâmetros pós-quânticos reunidos no cliente.', 'Tela de gerenciamento de chaves'],
      en: ['Cryptographic management', 'Local identities and post-quantum parameters brought together in the client.', 'Key management screen']
    },
    {
      src: 'assets/screenshot-did-list.png',
      pt: ['Identidades conhecidas', 'DIDs importados são separados por estado de confiança.', 'Lista de identidades DID'],
      en: ['Known identities', 'Imported DIDs are separated by trust state.', 'DID identity list']
    },
    {
      src: 'assets/screenshot-did-detail.png',
      pt: ['Detalhes e confiança', 'Fingerprint, algoritmos e vínculo ao contato ficam disponíveis para conferência.', 'Detalhes de uma identidade DID'],
      en: ['Details and trust', 'Fingerprint, algorithms, and contact binding are available for review.', 'DID identity details']
    },
    {
      src: 'assets/screenshot-account.png',
      pt: ['Configuração da conta', 'SMTP e IMAP convencionais conectam o protótipo ao provedor existente.', 'Configuração de conta no ISYCT-Mail'],
      en: ['Account configuration', 'Conventional SMTP and IMAP connect the prototype to the existing provider.', 'ISYCT-Mail account configuration']
    },
    {
      src: 'assets/screenshot-preferences.png',
      pt: ['Preferências locais', 'Opções do cliente mantêm segurança e usabilidade no mesmo ambiente.', 'Preferências do ISYCT-Mail'],
      en: ['Local preferences', 'Client options keep security and usability in the same environment.', 'ISYCT-Mail preferences']
    }
  ];

  const state = {
    language: 'pt',
    benchmark: 'envelope',
    galleryIndex: 0,
    toastTimer: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function preferredLanguage() {
    const requested = new URLSearchParams(window.location.search).get('lang');
    if (requested === 'pt' || requested === 'en') return requested;
    try {
      const saved = localStorage.getItem('isyct-language');
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (_) {
      // Storage may be unavailable in hardened browsers.
    }
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }

  function translate(language) {
    state.language = language;
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

    $$('[data-i18n]').forEach((element) => {
      const value = copy[language][element.dataset.i18n];
      if (value) element.textContent = value;
    });

    $$('[data-i18n-aria-label]').forEach((element) => {
      const value = copy[language][element.dataset.i18nAriaLabel];
      if (value) element.setAttribute('aria-label', value);
    });

    $$('.language-option').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    const metadata = language === 'pt'
      ? {
          title: 'ISYCT-Mail — E-mail pós-quântico',
          description: 'Conheça o ISYCT-Mail, um cliente de e-mail experimental com criptografia pós-quântica no lado do usuário.',
          social: 'Arquitetura, Envelope V4, gerenciamento de chaves e resultados do protótipo ISYCT-Mail.'
        }
      : {
          title: 'ISYCT-Mail — Post-quantum email',
          description: 'Discover ISYCT-Mail, an experimental email client with user-side post-quantum encryption.',
          social: 'Architecture, Envelope V4, key management, and measured results from the ISYCT-Mail prototype.'
        };

    document.title = metadata.title;
    $('meta[name="description"]')?.setAttribute('content', metadata.description);
    $('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    $('meta[property="og:description"]')?.setAttribute('content', metadata.social);

    try {
      localStorage.setItem('isyct-language', language);
    } catch (_) {
      // Translation still works without persistence.
    }

    renderChart();
    renderGallery();
  }

  function formatValue(value) {
    return new Intl.NumberFormat(state.language === 'pt' ? 'pt-BR' : 'en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    }).format(value);
  }

  function renderChart() {
    const chart = $('[data-chart]');
    const legend = $('[data-chart-legend]');
    const dataset = performanceData[state.benchmark];
    if (!chart || !legend || !dataset) return;

    const series = dataset.series[state.language];
    const max = Math.max(...series.flatMap((item) => item.values));
    chart.replaceChildren();
    legend.replaceChildren();

    dataset.labels.forEach((label, index) => {
      const row = document.createElement('div');
      row.className = 'chart-row';

      const rowLabel = document.createElement('span');
      rowLabel.className = 'chart-label';
      rowLabel.textContent = label;
      row.append(rowLabel);

      const tracks = document.createElement('div');
      tracks.className = 'chart-bars';
      series.forEach((item, seriesIndex) => {
        const track = document.createElement('div');
        track.className = 'chart-track';
        track.style.setProperty('--bar-width', `${Math.max(2, (item.values[index] / max) * 78)}%`);

        const bar = document.createElement('span');
        bar.className = `chart-bar ${seriesIndex === 0 ? 'primary' : 'secondary'}`;

        const value = document.createElement('strong');
        value.className = 'chart-value';
        value.textContent = `${formatValue(item.values[index])} ${dataset.unit}`;
        track.append(bar, value);
        tracks.append(track);
      });
      row.append(tracks);
      chart.append(row);
    });

    series.forEach((item, index) => {
      const legendItem = document.createElement('span');
      legendItem.className = `legend-item ${index === 0 ? 'primary' : 'secondary'}`;
      legendItem.innerHTML = `<i></i>${item.name}`;
      legend.append(legendItem);
    });

    $('[data-chart-title]').textContent = dataset[state.language].title;
    $('[data-highlight-value]').textContent = dataset[state.language].highlight;
    $('[data-highlight-text]').textContent = dataset[state.language].text;
    $('[data-highlight-secondary]').textContent = dataset[state.language].secondary;
  }

  function setBenchmark(name) {
    if (!performanceData[name]) return;
    state.benchmark = name;
    $$('[data-performance-tab]').forEach((button) => {
      const selected = button.dataset.performanceTab === name;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    renderChart();
  }

  function renderGallery() {
    const item = galleryItems[state.galleryIndex];
    const localized = item[state.language];
    const image = $('[data-gallery-image]');
    if (!image) return;
    image.src = item.src;
    image.alt = localized[2];
    $('[data-gallery-title]').textContent = localized[0];
    $('[data-gallery-caption]').textContent = localized[1];
    $('[data-gallery-count]').textContent = `${String(state.galleryIndex + 1).padStart(2, '0')} / ${String(galleryItems.length).padStart(2, '0')}`;
    $$('[data-gallery-dot]').forEach((dot, index) => {
      const selected = index === state.galleryIndex;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-pressed', String(selected));
      dot.setAttribute('aria-label', `${copy[state.language]['product.select']} ${index + 1}`);
    });
  }

  function setGalleryIndex(index) {
    state.galleryIndex = (index + galleryItems.length) % galleryItems.length;
    const image = $('[data-gallery-image]');
    image?.classList.add('is-changing');
    window.setTimeout(() => {
      renderGallery();
      image?.classList.remove('is-changing');
    }, 130);
  }

  function showToast(message) {
    const toast = $('[data-toast]');
    if (!toast) return;
    window.clearTimeout(state.toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    state.toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }

  async function copyText(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.append(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        if (!copied) throw new Error('Copy command failed');
      }
      showToast(copy[state.language]['toast.copied']);
    } catch (_) {
      showToast(copy[state.language]['toast.copyFailed']);
    }
  }

  function setupNavigation() {
    const header = $('[data-header]');
    const toggle = $('[data-menu-toggle]');
    const nav = $('#primary-navigation');

    const closeMenu = () => {
      toggle?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    toggle?.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav?.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });

    $$('a[href^="#"]', header).forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) closeMenu();
    });
    window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 16), { passive: true });

    const sections = $$('main section[id]');
    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          $$('.primary-nav a').forEach((link) => {
            link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`);
          });
        });
      }, { rootMargin: '-38% 0px -56% 0px' });
      sections.forEach((section) => sectionObserver.observe(section));
    }
  }

  function setupReveals() {
    const elements = $$('.reveal');
    elements.forEach((element) => {
      element.style.setProperty('--reveal-delay', `${element.dataset.revealDelay || 0}ms`);
    });
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px' });
    elements.forEach((element) => observer.observe(element));
  }

  function setupGallery() {
    const dots = $('[data-gallery-dots]');
    galleryItems.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.dataset.galleryDot = String(index);
      dot.addEventListener('click', () => setGalleryIndex(index));
      dots?.append(dot);
    });
    $('[data-gallery-prev]')?.addEventListener('click', () => setGalleryIndex(state.galleryIndex - 1));
    $('[data-gallery-next]')?.addEventListener('click', () => setGalleryIndex(state.galleryIndex + 1));
    $('[data-gallery]')?.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') setGalleryIndex(state.galleryIndex - 1);
      if (event.key === 'ArrowRight') setGalleryIndex(state.galleryIndex + 1);
    });
  }

  function setupTabs() {
    const tabs = $$('[data-performance-tab]');
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => setBenchmark(button.dataset.performanceTab));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let target = index;
        if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = tabs.length - 1;
        tabs[target].focus();
        setBenchmark(tabs[target].dataset.performanceTab);
      });
    });
  }

  function init() {
    $('[data-year]').textContent = new Date().getFullYear();
    setupNavigation();
    setupReveals();
    setupTabs();
    setupGallery();

    $$('.language-option').forEach((button) => {
      button.addEventListener('click', () => translate(button.dataset.language));
    });
    $$('[data-copy]').forEach((button) => button.addEventListener('click', () => copyText(button.dataset.copy)));
    $$('[data-download]').forEach((link) => link.addEventListener('click', () => showToast(copy[state.language]['toast.download'])));
    $$('[data-manual-download]').forEach((link) => link.addEventListener('click', () => showToast(copy[state.language]['toast.manual'])));
    $$('details').forEach((detail) => {
      detail.addEventListener('toggle', () => {
        if (!detail.open) return;
        $$('details').forEach((other) => {
          if (other !== detail) other.open = false;
        });
      });
    });

    translate(preferredLanguage());
  }

  init();
})();
