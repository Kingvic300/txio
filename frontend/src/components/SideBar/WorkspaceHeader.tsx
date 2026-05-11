import React, { useState } from 'react';
import { ChevronDown, Check, Plus } from 'lucide-react';
import { Workspace } from '../../types';

interface WorkspaceHeaderProps {
  currentWorkspace: Workspace;
  workspaces: Workspace[];
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onSwitchWorkspace: (ws: Workspace) => void;
  onCreateWorkspace: (name: string) => void;
}

export const WorkspaceHeader: React.FC<WorkspaceHeaderProps> = ({
  currentWorkspace,
  workspaces,
  isDropdownOpen,
  onToggleDropdown,
  onSwitchWorkspace,
  onCreateWorkspace
}) => {
  const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);
  const [newWsName, setNewWsName] = useState('');

  const handleCreateWorkspace = () => {
    if (newWsName.trim()) {
      onCreateWorkspace(newWsName.trim());
      setNewWsName('');
      setIsCreatingWorkspace(false);
      onToggleDropdown();
    }
  };

  return (
    <div className="px-4 py-5 flex flex-col justify-center border-b border-white/5 shrink-0 relative z-30 bg-near-black/50 backdrop-blur-md">
      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 px-1">Workspace</div>
      
      <button 
        onClick={onToggleDropdown} 
        className="flex items-center justify-between group py-2 px-3 rounded-xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5 active:scale-[0.98]"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-electric-violet shadow-[0_0_8px_rgba(123,63,242,0.6)]" />
          <span className="text-sm font-bold text-white group-hover:text-electric-violet transition-colors truncate tracking-tight">{currentWorkspace.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase border tracking-widest ${
            currentWorkspace.type === 'Personal' 
            ? 'border-white/10 text-slate-500' 
            : 'border-electric-violet/30 text-electric-violet bg-electric-violet/10'
          }`}>
            {currentWorkspace.type}
          </span>
        </div>
        <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-[calc(100%-8px)] left-3 right-3 bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
          <div className="p-2 max-h-64 overflow-y-auto custom-scrollbar space-y-1">
            {workspaces.map(ws => (
              <button
                key={ws.id}
                onClick={() => { onSwitchWorkspace(ws); onToggleDropdown(); }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                  ws.id === currentWorkspace.id 
                  ? 'bg-electric-violet/10 text-white' 
                  : 'text-slate-400 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className="truncate">{ws.name}</span>
                {ws.id === currentWorkspace.id && <Check size={14} className="text-electric-violet shrink-0"/>}
              </button>
            ))}
          </div>
          
          <div className="p-2 bg-white/[0.02] border-t border-white/5">
            {isCreatingWorkspace ? (
              <div className="px-1 flex items-center gap-2">
                <input
                  autoFocus
                  className="flex-1 bg-black border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-electric-violet/50 outline-none placeholder:text-slate-600 transition-all"
                  placeholder="Workspace Name..."
                  value={newWsName}
                  onChange={(e) => setNewWsName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCreateWorkspace();
                    if (e.key === 'Escape') setIsCreatingWorkspace(false);
                  }}
                />
                <button 
                  onClick={handleCreateWorkspace} 
                  className="p-2 bg-electric-violet hover:bg-soft-purple text-white rounded-xl transition-colors shadow-lg shadow-electric-violet/20"
                >
                  <Check size={14} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsCreatingWorkspace(true)}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
              >
                <Plus size={14} className="text-electric-violet" /> 
                <span>Create Workspace</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};