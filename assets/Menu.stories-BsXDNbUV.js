import{j as e}from"./jsx-runtime-ChD-R_kZ.js";import{r as i}from"./iframe-D86-JIDQ.js";import{M as C,N as I}from"./NestedMenu-DhwnfR31.js";import{B as b}from"./Button-LUwtYCUX.js";import{I as y}from"./IconArrowDownloadFilled-CFGUR341.js";import{I as g,a as h,b as x}from"./IconBeach-D2pAUEyV.js";import{I as M}from"./IconMore-DfqohY-g.js";import{I as O}from"./IconCheckmark-ClJIq4q4.js";import{I as n}from"./IconSettings-CvdjhxWd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-LkO0QyFh.js";import"./index-DxyDKgbu.js";import"./Text-DVcah_Ok.js";import"./helpers-CpnOmP83.js";import"./index-DYDl_GcV.js";import"./types-DjDoCdZV.js";import"./Popover-DD9I3MRL.js";import"./IconDismiss-6cVGHi3N.js";import"./Link-_LQtXONk.js";import"./index-mTSsNOLU.js";import"./CollapseGroup-PYkynFAj.js";import"./Divider-BwuJUjKI.js";import"./AnimatePresenceWrapper-AquoTjff.js";import"./IconChevronDown-DAJiWW6b.js";import"./IconChevronUp-BbpKS0S-.js";import"./IconChevronRight-CsPPXlL_.js";import"./AvatarGroup-dGRJvBgf.js";import"./DropzoneFileUpload-CtLH8Y5o.js";import"./Label-Cx8FIzSv.js";import"./useFormProps-DLdG--2n.js";import"./ErrorMessage-DQYtSCKQ.js";import"./IconDynamicComponent-CeAi6ncG.js";import"./Snackbar-CMDdQmA_.js";import"./Alert-CFXHYL-d.js";import"./IconDismissFilled-CgKkOrlA.js";import"./Progress-D_zgdfA1.js";import"./IconAdd-6jyQ_3jM.js";import"./Checkbox-Byux2FU0.js";import"./IconInfo-CoSWVBXK.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
