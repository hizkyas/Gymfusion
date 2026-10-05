import { type LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color: 'emerald' | 'violet' | 'amber' | 'sky';
  trend?: { value: number; label: string };
}

const colorMap = {
  emerald: {
    bg: 'rgba(129, 178, 154, 0.12)',
    border: 'rgba(129, 178, 154, 0.28)',
    icon: '#81B29A',
    glow: 'rgba(129, 178, 154, 0.25)',
    text: '#81B29A',
  },
  violet: {
    bg: 'rgba(224, 122, 95, 0.12)',
    border: 'rgba(224, 122, 95, 0.28)',
    icon: '#E07A5F',
    glow: 'rgba(224, 122, 95, 0.25)',
    text: '#E07A5F',
  },
  amber: {
    bg: 'rgba(233, 196, 106, 0.12)',
    border: 'rgba(233, 196, 106, 0.28)',
    icon: '#E9C46A',
    glow: 'rgba(233, 196, 106, 0.25)',
    text: '#E9C46A',
  },
  sky: {
    bg: 'rgba(69, 123, 157, 0.12)',
    border: 'rgba(69, 123, 157, 0.28)',
    icon: '#457B9D',
    glow: 'rgba(69, 123, 157, 0.25)',
    text: '#61A5C2',
  },
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title, value, subtitle, icon: Icon, color, trend,
}) => {
  const c = colorMap[color];

  return (
    <div className="stats-card" style={{ borderColor: c.border, background: `linear-gradient(135deg, ${c.bg}, rgba(27,25,23,0.9))` }}>
      <div className="stats-card__header">
        <div className="stats-card__icon-wrap" style={{ background: c.bg, boxShadow: `0 0 20px ${c.glow}` }}>
          <Icon size={22} color={c.icon} />
        </div>
        {trend && (
          <span className={`stats-card__trend ${trend.value >= 0 ? 'stats-card__trend--up' : 'stats-card__trend--down'}`}>
            {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
          </span>
        )}
      </div>
      <div className="stats-card__value" style={{ color: c.text }}>{value}</div>
      <div className="stats-card__title">{title}</div>
      {subtitle && <div className="stats-card__subtitle">{subtitle}</div>}
    </div>
  );
};
